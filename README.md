# ATG Front-end Case

## Kommentarer

- Eftersom CRA är deprecated körde jag på boilerplate-repot för create-react-router, detta gjorde jag innan jag såg skissen; med skissens layout blir routing överflödigt... så rensade ut react-router efter en stund och härmade Vites ts-react boilerplate istället.
- I jobbannonsen står det att ATG använder redux-saga - det använde jag även hos min förra arbetsgivare. Så även om det kanske är overkill för uppgiften bestämde jag mig för att skriva lösningen med det av dessa grunder.
- Med Vite blir app.css-stilarna globala, i övrigt är stylesheets scopade med CSS Modules. (för egna småprojekt föredrar jag oftast ShadowDOM för scoping, men där är React fortfarande lite efter...)
- La till unit-tester med Vitest för reducers och med redux-saga-test-plan för sagas. Hos min förra arbetsgivare var vi lite väl nitiska och expectade varje steg/yield i sagas. Mycket smidigare att använda redux-saga-test-plan:s expectSaga - men gäller att va noga att göra rätt så man assertar I/O ordentligt då - och verkligen hanterar alla fall.
- Strukterade Redux-state ungefär så som vi hade det på TIDAL. Finns ganska många "standarder" på hur man strukturerar det; och nu för tiden finns ju RTK Query och slices också...

## Kör

Installera node depsen och kör `npm run dev`. Alt öppna repot i en VS Code-baserad editor och "reopen in devcontainer" för att köra iexakt samma utvecklingsmiljö som jag skrev i.
