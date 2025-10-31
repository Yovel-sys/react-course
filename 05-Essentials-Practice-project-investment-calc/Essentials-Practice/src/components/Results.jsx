import { calculateInvestmentResults } from "../util/investment.js";
export default function Results({ input }) {
  const investmentResult = calculateInvestmentResults(input);
  console.log(investmentResult);

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResult.map((row) => {
            return (
              <tr key={row.year}>
                <th>{row.year}</th>
                <td>{row.valueEndOfYear}</td>
                <td>{row.interest}</td>
                <td>{}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
