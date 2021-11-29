import React from "react";

import StyledTable from "./StyledTable";
import StyledAmount from "./StyledAmount";

export default function EntryTable({ entries }) {
  const total = entries.reduce((sum, curr) => curr.income ? sum + Number(curr.value) : sum - Number(curr.value), 0);
  return (
    <StyledTable>
      <tbody>
        {entries.map((entry, i) => (
          <tr key={i}>
            <td>
              {entry.date.split("T")[0].substring(5, 10).replace("-", "/")}
            </td>
            <td>
              <span>{entry.description}</span>
            </td>
            <td>
              <StyledAmount isGreen={entry.income}>
                {Number(entry.value).toFixed(2)}
              </StyledAmount>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>SALDO</td>
          <td>
            <StyledAmount isGreen={total >= 0 ? true : false}>
              {total.toFixed(2)}
            </StyledAmount>
          </td>
        </tr>
      </tfoot>
    </StyledTable>
  );
}
