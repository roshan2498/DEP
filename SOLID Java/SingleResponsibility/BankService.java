// Performs following operations
// Withdraw, Deposit, Print Pass Book, Get Loan, Send OTP.
// Bad
public class BankService{
	public long deposit(long amount,String accountNo){
		// deposit amount
		return 0;
	}

	public long withDraw(long amount,String accountNo){
		// withdraw amount
		return 0;
	}

	public void printPassbook(){
		// update transaction info in passbook
	}

	public void getLoanInterestInfo(String loanType){
		if(loanType.equals("homeLoan")){
			//do some job
		}
		if(loanType.equals("personalLoan")){
			// do some job
		}
		if(loanType.equals("car")){
			// do some job
		}
	}

	public void sendOTP(String Medium){
		if(medium.equals("email"){
			//write email related logic 
		}
	}
}