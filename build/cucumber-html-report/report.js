$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login_to_aem.feature");
formatter.feature({
  "name": "Login",
  "description": "  In order to edit site\n  As a site administrator\n  I want to log in",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have opened test page",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizationSteps.I_have_opened_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthorizationSteps.I_press_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see test page",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.I_should_see_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/text.feature");
formatter.feature({
  "name": "Text Component",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login and create a text page",
  "keyword": "Given "
});
formatter.match({
  "location": "TextFeatureSteps.I_login_and_create_a_test_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate title authoring value",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open the new text page",
  "keyword": "When "
});
formatter.match({
  "location": "TextFeatureSteps.I_open_the_test_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I configure the Text component text field to be Test Page Text",
  "keyword": "And "
});
formatter.match({
  "location": "TextFeatureSteps.I_configure_the_title_component()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.DialogFieldRetrieverImpl.getFields(DialogFieldRetrieverImpl.java:95)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.DialogFieldRetrieverImpl.getDialogField(DialogFieldRetrieverImpl.java:68)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.ConfigDialogImpl.lambda$setFields$4(ConfigDialogImpl.java:208)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat java.util.Collections$UnmodifiableCollection.forEach(Collections.java:1080)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.ConfigDialogImpl.setFields(ConfigDialogImpl.java:207)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.ConfigDialogImpl.lambda$configure$3(ConfigDialogImpl.java:201)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat java.util.Collections$UnmodifiableCollection.forEach(Collections.java:1080)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.ConfigDialogImpl.configure(ConfigDialogImpl.java:199)\r\n\tat com.cognifide.qa.bb.aem.core.component.dialog.ConfigDialogImpl.configureWith(ConfigDialogImpl.java:133)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.switchFrameAndProceed(FrameAspect.java:70)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.invoke(FrameAspect.java:58)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:65)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.switchFrameAndProceed(FrameAspect.java:70)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.invoke(FrameAspect.java:58)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:40)\r\n\tat com.cognifide.qa.bb.api.actions.internal.DefaultController.execute(DefaultController.java:55)\r\n\tat com.honeywell.honeywell.steps.TextFeatureSteps.I_configure_the_title_component(TextFeatureSteps.java:74)\r\n\tat ✽.I configure the Text component text field to be Test Page Text(file:src/test/resources/features/text.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I save the dialog then switched to Preview mode",
  "keyword": "And "
});
formatter.match({
  "location": "TextFeatureSteps.I_save_the_dialog_and_switch_to_preview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the Component Text is \"Test Page Text\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TextFeatureSteps.iVerifyTheHeaderText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("Test page: \u003ca href\u003dhttp://127.0.0.1:4502/editor.html/content/we-retail/us/en/text.html\u003elink\u003c/a\u003e");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/title.feature");
formatter.feature({
  "name": "Title Component",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login then create a new title page",
  "keyword": "Given "
});
formatter.match({
  "location": "TitleFeatureSteps.I_login_then_create_a_test_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate title authoring value",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open the test title page",
  "keyword": "When "
});
formatter.match({
  "location": "TitleFeatureSteps.I_open_the_test_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I configure the Title component Title field to be Test Page Title",
  "keyword": "And "
});
formatter.match({
  "location": "TitleFeatureSteps.I_configure_the_title_component()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: YAML file could not be read\r\n\tat com.cognifide.qa.bb.utils.YamlReader.readFromTestResources(YamlReader.java:93)\r\n\tat com.cognifide.qa.bb.aem.core.component.configuration.ComponentConfigResourceFileReader.readConfiguration(ComponentConfigResourceFileReader.java:45)\r\n\tat com.cognifide.qa.bb.aem.core.component.configuration.ComponentConfigResourceFileReader.readConfiguration(ComponentConfigResourceFileReader.java:34)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:64)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.switchFrameAndProceed(FrameAspect.java:70)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.invoke(FrameAspect.java:58)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:40)\r\n\tat com.cognifide.qa.bb.api.actions.internal.DefaultController.execute(DefaultController.java:55)\r\n\tat com.honeywell.honeywell.steps.TitleFeatureSteps.I_configure_the_title_component(TitleFeatureSteps.java:75)\r\n\tat ✽.I configure the Title component Title field to be Test Page Title(file:src/test/resources/features/title.feature:8)\r\nCaused by: com.fasterxml.jackson.databind.JsonMappingException: No content to map due to end-of-input\n at [Source: UNKNOWN; line: 1, column: 1]\r\n\tat com.fasterxml.jackson.databind.JsonMappingException.from(JsonMappingException.java:270)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper._initForReading(ObjectMapper.java:3854)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:3799)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:2931)\r\n\tat com.cognifide.qa.bb.utils.YamlReader.readFromTestResources(YamlReader.java:90)\r\n\tat com.cognifide.qa.bb.aem.core.component.configuration.ComponentConfigResourceFileReader.readConfiguration(ComponentConfigResourceFileReader.java:45)\r\n\tat com.cognifide.qa.bb.aem.core.component.configuration.ComponentConfigResourceFileReader.readConfiguration(ComponentConfigResourceFileReader.java:34)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:64)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.switchFrameAndProceed(FrameAspect.java:70)\r\n\tat com.cognifide.qa.bb.frame.FrameAspect.invoke(FrameAspect.java:58)\r\n\tat com.cognifide.qa.bb.aem.core.component.actions.ConfigureComponent.execute(ConfigureComponent.java:40)\r\n\tat com.cognifide.qa.bb.api.actions.internal.DefaultController.execute(DefaultController.java:55)\r\n\tat com.honeywell.honeywell.steps.TitleFeatureSteps.I_configure_the_title_component(TitleFeatureSteps.java:75)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.Runtime$1.run(Runtime.java:104)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat cucumber.runtime.Runtime$SameThreadExecutorService.execute(Runtime.java:258)\r\n\tat java.util.concurrent.AbstractExecutorService.submit(AbstractExecutorService.java:112)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:101)\r\n\tat io.cucumber.core.cli.Main.run(Main.java:43)\r\n\tat cucumber.api.cli.Main.run(Main.java:28)\r\n\tat cucumber.api.cli.Main.main(Main.java:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I save the dialog and switch to Preview mode",
  "keyword": "And "
});
formatter.match({
  "location": "TitleFeatureSteps.I_save_the_dialog_and_switch_to_preview()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the Header Text is \"Test Page Title\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TitleFeatureSteps.iVerifyTheHeaderText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("Test page: \u003ca href\u003dhttp://127.0.0.1:4502/editor.html/content/we-retail/us/en/title.html\u003elink\u003c/a\u003e");
formatter.after({
  "status": "passed"
});
});