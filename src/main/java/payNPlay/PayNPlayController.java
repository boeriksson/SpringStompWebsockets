package payNPlay;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class PayNPlayController {


    @MessageMapping("/hello")
    @SendTo("/topic/paynplay")
    public HelloMessage greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new HelloMessage("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }
}