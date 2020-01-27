package com.honeywell.honeywell;

import com.google.inject.AbstractModule;
import com.honeywell.honeywell.pages.TextComponent;
import com.honeywell.honeywell.pages.TextComponentImpl;
import com.honeywell.honeywell.pages.TitleComponent;
import com.honeywell.honeywell.pages.TitleComponentImpl;

public class ComponentModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(TextComponent.class).to(TextComponentImpl.class);
        bind(TitleComponent.class).to(TitleComponentImpl.class);
    }
}
