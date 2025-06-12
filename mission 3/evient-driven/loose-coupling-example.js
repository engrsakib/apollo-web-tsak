// MessageSender ডিপেন্ড করে ইন্টারফেসের ওপর, নির্দিষ্ট ক্লাসের ওপর নয়
class MessageSender {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message) {
        this.sender.send(message);
    }
}

// EmailSender ক্লাস
class EmailSender {
    send(message) {
        console.log(`Sending email: ${message}`);
    }
}

// SmsSender ক্লাস
class SmsSender {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}

// ব্যবহার:
const emailSender = new EmailSender();
const smsSender = new SmsSender();

const emailMessage = new MessageSender(emailSender);
emailMessage.sendMessage("Hello via Email!");

const smsMessage = new MessageSender(smsSender);
smsMessage.sendMessage("Hello via SMS!");