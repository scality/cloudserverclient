import { parseListObjectsUserMetadataMiddleware } from '../../../src/commands/s3Extended/utils';

describe('parseListObjectsUserMetadataMiddleware', () => {
    function buildXml(contents: Record<string, string>[]): string {
        const inner = contents.map(obj => `<Contents>${
            Object.entries(obj).map(([k, v]) => `<${k}>${v}</${k}>`).join('')
        }</Contents>`).join('');
        return `<ListBucketResult>${inner}</ListBucketResult>`;
    }

    function createNext(output: unknown) {
        return async () => ({ output });
    }

    it('should extract user metadata when XML contains a single Contents element', async () => {
        const captured = {
            xml: buildXml([
                { 'Key': 'obj1', 'x-amz-meta-foo': 'bar' },
            ]),
        };

        const middleware = parseListObjectsUserMetadataMiddleware(captured);
        const result = await middleware(createNext({
            Contents: [{ Key: 'obj1' }],
        }))({ request: {} });
        expect(result.output.Contents[0]['x-amz-meta-foo']).toBe('bar');
    });

    it('should extract user metadata when XML contains multiple Contents elements', async () => {
        const captured = {
            xml: buildXml([
                { 'Key': 'obj1', 'x-amz-meta-foo': 'bar' },
                { 'Key': 'obj2', 'x-amz-meta-foo': 'baz' },
            ]),
        };

        const middleware = parseListObjectsUserMetadataMiddleware(captured);
        const result = await middleware(createNext({
            Contents: [{ Key: 'obj1' }, { Key: 'obj2' }],
        }))({ request: {} });
        expect(result.output.Contents[0]['x-amz-meta-foo']).toBe('bar');
        expect(result.output.Contents[1]['x-amz-meta-foo']).toBe('baz');
    });

    it('should handle empty Contents gracefully', async () => {
        const captured = {
            xml: buildXml([]),
        };

        const middleware = parseListObjectsUserMetadataMiddleware(captured);
        const result = await middleware(createNext({
            Contents: undefined,
        }))({ request: {} });
        expect(result.output.Contents).toBeUndefined();
    });
});
