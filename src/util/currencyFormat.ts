/**
 * Given a number, it will return a properly formatted string to represent that number in dollars.
 * Ex: 1500 => $1,500.00
 * @param input The number representing money
 * @returns A formatted string with a dollar sign
 */
export function currencyFormat(input: number): string {
    return (
        "$" +
        input.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        })
    );
}
