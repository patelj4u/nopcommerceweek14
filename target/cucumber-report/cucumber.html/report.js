$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs A User I Want to Check Computer Page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click and mouseHover on Computertab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on Desktops tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor as \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# And I click on ram dropdown"
    }
  ],
  "line": 22,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select  Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "| processor                                       | ram           | hdd               | os                     | software |",
  "description": "",
  "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 29,
      "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|;1"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 30,
      "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 31,
      "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3414011800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click and mouseHover on Computertab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on Desktops tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor as \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# And I click on ram dropdown"
    }
  ],
  "line": 22,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select  Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickAndMouseHoverOnComputertab()"
});
formatter.result({
  "duration": 217074200,
  "status": "passed"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnDesktopsTab()"
});
formatter.result({
  "duration": 510118000,
  "status": "passed"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 821476600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cprocessor\u003e",
      "offset": 23
    }
  ],
  "location": "BuildComputerStepdefs.iSelectProcessorAs(String)"
});
formatter.result({
  "duration": 20124622900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: \u003cprocessor\u003e\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:153)\r\n\tat com.nopcommerce.demo.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:147)\r\n\tat com.nopcommerce.demo.pages.BuildYourOwnComputerPage.clickProcessorDropDown(BuildYourOwnComputerPage.java:51)\r\n\tat com.nopcommerce.demo.cucumber.Stepdefs.BuildComputerStepdefs.iSelectProcessorAs(BuildComputerStepdefs.java:44)\r\n\tat ✽.And I select processor as \"\u003cprocessor\u003e\"(computerpagetest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cram\u003e",
      "offset": 14
    }
  ],
  "location": "BuildComputerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chdd\u003e",
      "offset": 14
    }
  ],
  "location": "BuildComputerStepdefs.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cos\u003e",
      "offset": 13
    }
  ],
  "location": "BuildComputerStepdefs.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csoftware\u003e",
      "offset": 20
    }
  ],
  "location": "BuildComputerStepdefs.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 11
    }
  ],
  "location": "BuildComputerStepdefs.iCanSee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 832116700,
  "status": "passed"
});
formatter.before({
  "duration": 2200824700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;user-should-build-your-own-computer-and-add-them-to-cart-successfully;|-processor---------------------------------------|-ram-----------|-hdd---------------|-os---------------------|-software-|;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click and mouseHover on Computertab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on Desktops tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select processor as \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# And I click on ram dropdown"
    }
  ],
  "line": 22,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select  Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickAndMouseHoverOnComputertab()"
});
formatter.result({
  "duration": 140054900,
  "status": "passed"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnDesktopsTab()"
});
formatter.result({
  "duration": 935825100,
  "status": "passed"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1060580600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cprocessor\u003e",
      "offset": 23
    }
  ],
  "location": "BuildComputerStepdefs.iSelectProcessorAs(String)"
});
formatter.result({
  "duration": 3927358000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: \u003cprocessor\u003e\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:153)\r\n\tat com.nopcommerce.demo.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:147)\r\n\tat com.nopcommerce.demo.pages.BuildYourOwnComputerPage.clickProcessorDropDown(BuildYourOwnComputerPage.java:51)\r\n\tat com.nopcommerce.demo.cucumber.Stepdefs.BuildComputerStepdefs.iSelectProcessorAs(BuildComputerStepdefs.java:44)\r\n\tat ✽.And I select processor as \"\u003cprocessor\u003e\"(computerpagetest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cram\u003e",
      "offset": 14
    }
  ],
  "location": "BuildComputerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003chdd\u003e",
      "offset": 14
    }
  ],
  "location": "BuildComputerStepdefs.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cos\u003e",
      "offset": 13
    }
  ],
  "location": "BuildComputerStepdefs.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csoftware\u003e",
      "offset": 20
    }
  ],
  "location": "BuildComputerStepdefs.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuildComputerStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 11
    }
  ],
  "location": "BuildComputerStepdefs.iCanSee(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23707900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d110.0.5481.96)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [917fc2c65f6e63b5cdf0c94470cd9738, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.96, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\mjfoo\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62956}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62956/devtoo..., se:cdpVersion: 110.0.5481.96, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 917fc2c65f6e63b5cdf0c94470cd9738\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.nopcommerce.demo.utility.Utility.getScreenshot(Utility.java:334)\r\n\tat com.nopcommerce.demo.cucumber.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});