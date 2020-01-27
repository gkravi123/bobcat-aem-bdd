package com.honeywell.honeywell.steps;

import com.cognifide.qa.bb.aem.core.api.AemActions;
import com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponentData;
import com.cognifide.qa.bb.aem.core.component.configuration.ResourceFileLocation;
import com.cognifide.qa.bb.aem.core.pages.sling.SlingDataXMLBuilder;
import com.cognifide.qa.bb.aem.core.pages.sling.SlingPageData;
import com.cognifide.qa.bb.api.actions.ActionData;
import com.cognifide.qa.bb.api.actions.ActionException;
import com.cognifide.qa.bb.api.actions.ActionsController;
import com.cognifide.qa.bb.page.BobcatPageFactory;
import com.google.inject.Inject;
import com.honeywell.honeywell.pages.TestPage;
import com.honeywell.honeywell.pages.TextComponent;
import com.honeywell.honeywell.pages.TextComponentImpl;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.guice.ScenarioScoped;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

//import static org.assertj.core.api.Assertions.assertThat;

/**
 * This is an implementation of steps in the "Login" scenario.
 * <p/>
 * You can leave it as it is, as long as you don't modify the login scenario.
 */

@ScenarioScoped
public class TextFeatureSteps {

	private static final String BASE_PAGE_PATH = "/content/we-retail/us/en/";

	private TestPage testPage;
	private String testPageName;
	private TextComponentImpl textComponent;

	@Inject
	private ActionsController controller;

	@Inject
	private BobcatPageFactory bobcatPageFactory;


	@Given("^I login and create a (.*?) page$")
	public void I_login_and_create_a_test_page(String pageName) throws ActionException {
		controller.execute(AemActions.LOG_IN);
		testPageName = pageName;
		controller.execute(AemActions.CREATE_PAGE_VIA_SLING,
				new SlingPageData(new StringBuilder().append(BASE_PAGE_PATH).append(pageName).toString(),
						SlingDataXMLBuilder.buildFromFile("textPage.xml")));
	}

	@When("^I open the new (.*?) page$")
	public void I_open_the_test_page(String pageName) {
		testPage = bobcatPageFactory.create(
				new StringBuilder().append("/editor.html").append(BASE_PAGE_PATH).append(pageName).append(".html").toString(),
				TestPage.class);
		testPage.setTitle(pageName);
		assertTrue(testPage.open().isDisplayed());
	}


	@And("^I configure the Text component text field to be Test Page Text")
	public void I_configure_the_title_component() throws ActionException {
        System.out.println("Text: " + new ResourceFileLocation("text.yaml").getFileName());
        ActionData actionData = new ConfigureComponentData("container", "Text", 0,
                new ResourceFileLocation("text.yaml"));
        System.out.println("actionData: " + actionData);
        controller.execute(AemActions.CONFIGURE_COMPONENT,
                new ConfigureComponentData("container", "Text", 0,
                        new ResourceFileLocation("text.yaml")));
	}

	@And("^I save the dialog then switched to Preview mode")
	public void I_save_the_dialog_and_switch_to_preview() {
		//textComponent = testPage.getContent(TextComponentImpl.class, 0);
		textComponent = (TextComponentImpl) testPage.getContent(TextComponent.class, 0);
	}

	@Then("^I should see the Component Text is \"(.*?)\"$")
	public void iVerifyTheHeaderText(String expectedHeaderTitle) throws ActionException {
		//Assert.assertThat(titleComponent.getTitle().com);
		//assertThat(textComponent.getInnerHTML().trim().replaceAll("\\r|\\n", "")).matches(".*<b>Bobcat test text.*</b>.*");
		assertEquals(textComponent.getInnerHTML().trim().replaceAll("\\r|\\n", ""), expectedHeaderTitle);
		controller.execute(AemActions.DELETE_PAGE_VIA_SLING, new SlingPageData(
				new StringBuilder().append(BASE_PAGE_PATH).append(testPageName).toString()));
	}
}

