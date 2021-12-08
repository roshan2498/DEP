public class NotificationService{
	public void	sendOTP(String medium){
		if(medium.equals("email")){
			// write email related logic
		}
	}
}

// later on we want to send OTP via sms or whatsapp message

// Its not recommended to modify notfication service for each otp feature.

// So to overcome this you need to design your code in such a way that everyone can reuse your feature by just extending it and if they need any customization they can extend it and add their feature on top of it like a abstraction .