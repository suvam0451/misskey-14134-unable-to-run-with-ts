import {api as misskeyApi} from "misskey-js"


async function main() {
 const client = new misskeyApi.APIClient({
    origin: "misskey.io"
  })
  console.log(client.fetch("emoji/list"))
}

main();
