# ATG Front-end Case

- Eftersom CRA är deprecated körde jag på boilerplate-repot för create-react-router, detta gjorde jag innan jag såg skissen; med skissens layout begövs ingen routing... så rensade ut react-router sen.
- I jobbannonsen står det att ATG använder redux-saga - det använde jag även hos min förra arbetsgivare. Så även om det kanske är overkill för uppgiften gick jag för att skriva lösningen med det av dessa grunder.

## Kör

Installera node depsen och kör `npm run dev`. Alt öppna repot i en VS Code-baserad editor och "reopen in devcontainer" för att köra iexakt samma utvecklingsmiljö som jag skrev i.

## Tester

La till unit-tester med Vitest för reducers och med redux-saga-test-plan för sagas. Hos min förra arbetsgivare var vi lite väl nitiska och expectade varje steg/yield i sagas. Mycket smidigare att använda redux-saga-test-plan:s expectSaga - men gäller att va noga att göra rätt så man assertar I/O ordentligt då - och verkligen hanterar alla fall.
