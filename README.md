# Combustível PE

Protótipo responsivo de consulta de preços de combustíveis para o portal Estado de Pernambuco, desenvolvido em Next.js e TypeScript. Os postos, endereços, posições e preços exibidos são fictícios. Não use estes dados para decisões reais de abastecimento.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000. Para validar a compilação de produção, execute `npm run build`.

## Vercel

Importe o repositório no painel da Vercel. O framework Next.js é detectado automaticamente; use os comandos padrão de instalação e build. Nenhuma variável de ambiente é necessária para o protótipo.

## Dados e localização

Os dados demonstrativos estão em `app/page.tsx` e as posições ilustrativas em `app/StationMap.tsx`. O mapa usa Leaflet e OpenStreetMap. O botão de localização solicita permissão ao navegador e usa a posição apenas no estado local da página para centralizar o mapa; o projeto não a salva. A disponibilidade da localização depende de HTTPS (ou localhost) e da permissão do usuário. Os blocos do mapa são carregados de servidores externos do OpenStreetMap, sujeitos às respectivas políticas de uso.

Para operação real, é necessário definir uma fonte confiável e autorizada de preços, cadastro de redes e postos, armazenamento persistente, autenticação e controle de acesso para responsáveis, rotina de atualização diária, registro de data e origem de cada preço, e políticas de privacidade e de uso dos serviços de mapa. Nenhuma atualização automática ou integração com redes está configurada nesta versão.
