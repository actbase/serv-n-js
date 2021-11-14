import fs from 'fs';
import http from 'http';

import { ServerOption } from './types';

export const run = (dirname: string, options: ServerOption) => {

    const loadPath = async (path: string, subPath: string) => {
        const files = await fs.readdirSync(path + subPath, { withFileTypes: true });
        for (const file of files) {
            if (file.isDirectory()) {
                await loadPath(path, subPath + '/' + file.name);
            } else if (file.name.match(/\.js$/) !== null || file.name.match(/\.ts$/) !== null) {
                // eslint-disable-next-line no-undef
                require(dirname + '/app' + subPath + '/' + file.name);
            }
        }
    };


    const initServer = async () => {
        return { app: undefined };
    };

    initServer()
        .then(({ app }) => {
            const server = http.createServer(app);
        //   if (options.socket) {
        //     socketInit(server, options.socket, options.auth);
        //   }

            const port = options.port || 3100;
            server.listen(port, () => {
                console.log(`Server is running on ${port} port.  http://localhost:${port}`);
                // options?.listener?.();
            });
        })
        .catch(console.warn);

};


export default run;
