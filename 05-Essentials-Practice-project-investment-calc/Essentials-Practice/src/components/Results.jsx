import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  let interestUntilNow = 0;
  let totalInvestment = input.initialInvestment;

  return (
    <table id="result">
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
        {resultData.map((YearData) => {
          interestUntilNow += YearData.interest;
          totalInvestment += input.annualInvestment;
          return (
            <tr key={YearData.year}>
              <th>{YearData.year}</th>
              <td>{formatter.format(YearData.valueEndOfYear)}</td>
              <td>{formatter.format(YearData.interest)}</td>
              <td>{formatter.format(interestUntilNow)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
