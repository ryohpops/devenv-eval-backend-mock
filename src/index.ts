import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import { addMocksToSchema } from "@graphql-tools/mock";
import { createServer } from "@graphql-yoga/node";

const schema = await loadSchema("./schema/**/*.graphql", {
  loaders: [
    new GraphQLFileLoader()
  ]
})

const mock = addMocksToSchema({ schema })

const server = createServer({ schema: mock })
server.start()
