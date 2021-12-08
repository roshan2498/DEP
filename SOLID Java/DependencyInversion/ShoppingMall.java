package com.roshan.DependencyInversion;

public class ShoppingMall{
	private DebitCard debitCard;

	public ShoppingMall(DebitCard debitCard){
		this.debitCard = debitCard;
	}

	public void doPurchaseSomething(long amount){
		debitCard.doTransaction(amount);
	}

	public static void main(String[] args) {
		DebitCard debitCard = new DebitCard();
		ShoppingMall shoppingMall = new ShoppingMall(debitCard);
		ShoppingMall.doPurchaseSomething(5000);

	}
}

// shopping mall class is tightly coupled with debitcard
// if you want to use credit card instead of debit card

// changes in code
public class ShoppingMall{
	private CreditCard creditCard;

	public ShoppingMall(CreditCard creditCard){
		this.creditCard = creditCard;
	}

	public void doPurchaseSomething(long amount){
		creditCard.doTransaction(amount);
	}

	public static void main(String[] args) {
		CreditCard creditCard = new creditCard();
		ShoppingMall shoppingMall = new ShoppingMall(creditCard);
		ShoppingMall.doPurchaseSomething(5000);

	}
}