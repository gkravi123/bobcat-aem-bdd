package com.honeywell.honeywell.pages;

import com.cognifide.qa.bb.aem.core.pages.AemAuthorPage;
import com.cognifide.qa.bb.qualifier.CurrentScope;
import com.cognifide.qa.bb.qualifier.PageObject;
import com.google.inject.Inject;
import org.openqa.selenium.WebElement;

@PageObject(css = ".title")
public class TitleComponentImpl implements TitleComponent {

  @Inject
  @CurrentScope
  private WebElement component;

  public String getTitle() { return component.getText(); }
  
}
