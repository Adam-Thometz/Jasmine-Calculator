
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

it("should throw an error when there is a value other than a number in any input", function() {
  const values = {
    amount: '7djsrg',
    years: 5,
    rate: 2.9
  }
  expect(() => findError(values)).toThrowError();
})