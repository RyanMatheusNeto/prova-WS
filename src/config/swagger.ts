export const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Products API',
      version: '0.1.0',
      description: 'Prova de WS',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Ryan Neto',
        url: 'https://github.com/RyanMatheusNeto',
        email: 'ryan.neto@estudante.edu.br',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['**/*.yml'],
  paths: {
    '/products': {
      post: {
        summary: 'Salva um novo produto',
        tags: ['product'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product'
              }
            }
          }
        },
        responses: {
          '201': {
            description: 'Produto cadastrado com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    product: {
                      $ref: '#/components/schemas/ProductCreatedResponse'
                    }
                  }
                }
              }
            }
          },
          '400': {
            description: 'O objeto de Produto recebido é inválido',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/ProductCreationFailResponse'
                }
              }
            }
          }
        }
      },
    },
    '/products/{id}': {
      get: {
        summary: 'Procura o produto pelo ID',
        description: 'Procura o produto pelo identificador',
        responses:{
          '200':{
            description:'este é o produto',
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/GetProductId'
                }
              }
            }
          },
          '404':{
            description:'não foi encontrado o produto',
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/NotGetProductId'
                }
              }
            }
          } 
        } 
      },
    },
    '/products/description/{description}':{
      get:{
        summary:'Procura o produto pela descrição',
        description:'Procura o produto pela descrição fornecida',
        responses:{
          '200':{
            description:'este é o produto',
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/GetProductDescription'
                }
              }
            }
          },
          '404':{
            description:'não foi encontrado o produto',
            content:{
              'application/json':{
                schema:{
                  $ref:'#/components/schemas/NotGetProductDescription'
                }
              }
            } 
          } 
        } 
      }, 
    }, 
  },
}
