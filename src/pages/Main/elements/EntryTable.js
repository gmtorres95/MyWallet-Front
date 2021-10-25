import styled from "styled-components";

export default function EntryTable({entries}) {
    const total = entries.reduce((sum, curr) => curr.income ? sum + Number(curr.value) : sum - Number(curr.value), 0);
    return (
        <StyledTable>
            <tbody>
                {entries.map((entry, i) => 
                    <tr key={i}>
                        <td>
                            <Date>{entry.date.split("T")[0].substring(5, 10).replace("-","/")}</Date>
                            <span>{entry.description}</span>
                        </td>
                        <td>
                            <Amount isGreen={entry.income}>{Number(entry.value).toFixed(2)}</Amount>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td>SALDO</td>
                    <td>
                        <Amount isGreen={total >= 0 ? true : false}>{total.toFixed(2)}</Amount>
                    </td>
                </tr>
            </tfoot>
        </StyledTable>
    );
}

const StyledTable = styled.table`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;

    tr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 23px;
    }

    tbody {
        overflow-y: scroll;
    }

    tbody::-webkit-scrollbar {
        display: none;
    }

    tfoot {
        font-size: 17px;
    }

    tfoot td:first-child {
        font-weight: 700;
    }
`;

const Date = styled.span`
    color: #C6C6C6;
    margin-right: 8px;
`;

const Amount = styled.span`
    color: ${params => params.isGreen ? "green" : "red"};
`;