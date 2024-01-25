import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:3000/api/graphql',
	documents: './graphql/**/*.graphql',
	generates: {
		'./graphql/generated/': {
			preset: 'client',
			plugins: []
		},
		'./graphql/graphql.schema.json': {
			plugins: ['introspection']
		},
		'./graphql/types/index.ts': {
			plugins: ['typescript'],
			config: {
			  avoidOptionals: true
			}
		}
	}
}

export default config