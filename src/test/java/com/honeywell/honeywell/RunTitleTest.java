package com.honeywell.honeywell;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/features", plugin = { "pretty",
        "html:target/cucumber-title-html-report", "json:target/cucumber-title-report.json" })
public class RunTitleTest {
}
