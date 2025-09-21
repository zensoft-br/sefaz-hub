# SEFAZ Resources

Este repositório reúne de forma organizada os principais **recursos técnicos da SEFAZ** utilizados em integrações fiscais no Brasil, incluindo:  

- 🔗 **Endpoints oficiais** de webservices da NFe, NFCe, CTe e MDFe, estruturados em arquivos JSON padronizados.  
- 📑 **Schemas XSD** por versão, para validação local dos documentos fiscais.  
- 📝 **Exemplos de XML** (autorização, cancelamento, inutilização, etc.) para auxiliar no desenvolvimento e testes.  
- 📚 **Documentação oficial** (MOC, Notas Técnicas, manuais e links de referência).  

## Objetivo
Servir como uma **fonte unificada, versionada e aberta** de informações técnicas da SEFAZ, facilitando a vida de desenvolvedores e integradores que precisam manter sistemas atualizados frente às constantes mudanças na legislação fiscal eletrônica.  

## Estrutura do repositório

```
sefaz-hub/
 ├─ README.md
 ├─ endpoints/
 │   ├─ nfe.json
 │   ├─ nfce.json
 │   ├─ cte.json
 │   └─ mdfe.json
 ├─ schemas/
 │   ├─ nfe/
 │   ├─ nfce/
 │   ├─ cte/
 │   └─ mdfe/
 ├─ samples/
 │   ├─ nfe/
 │   ├─ nfce/
 │   ├─ cte/
 │   └─ mdfe/
 └─ docs/
     ├─ MOC/
     ├─ notas_tecnicas/
     └─ links.md
```

## Como usar

### Endpoints
Exemplo em JavaScript:

```js
const url = "https://cdn.jsdelivr.net/gh/<usuario>/sefaz-resources/endpoints/nfe.json";
const res = await fetch(url);
const data = await res.json();
console.log(data.services.SP.producao.autorizacao);
```

### Schemas
Baixe os arquivos XSD em `schemas/` para validar seus XMLs localmente.

### Samples
Utilize os exemplos de XML disponíveis em `samples/` para testes de homologação e aprendizado.

### Documentação
Na pasta `docs/` você encontra MOCs, Notas Técnicas e links úteis para consulta.

---

Mantido pela comunidade e disponível para qualquer pessoa que precise integrar com os webservices da SEFAZ.
