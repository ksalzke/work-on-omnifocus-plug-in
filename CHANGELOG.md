## [1.2.2](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.2.1...v1.2.2) (2023-08-26)


### Bug Fixes

* :bug: fix logic for when scheduling info is displayed in dialogue ([cf5cb39](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/cf5cb39a1e3d22a2afe14a13e88311d5f862c713))
* :bug: handle situation where getScheduleInfo function is not available in Scheduling plugin (version < v2.4.0) ([79944fe](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/79944fe4463c1855cd0589e3fafa1bdbfc9a0c1b))



## [1.2.1](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.2.0...v1.2.1) (2023-08-23)


### Bug Fixes

* :bug: add 'true' hourly repetitions using 60 min repeat rule ([dbad1f0](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/dbad1f058083186c6cd5442f09e4e995dcf81b34)), closes [#5](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/5)



# [1.2.0](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.1.0...v1.2.0) (2023-08-23)


### Bug Fixes

* :bug: add defer date on creation so first deferral behaves as expected ([bb262fa](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/bb262faa9c2e8fe0b9597aa475501e33b3b38998)), closes [#4](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/4)


### Features

* :lipstick: show scheduling information if task scheduled (closes [#7](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/7)) ([6fc1789](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/6fc17894d5309e13d7a0c03d88a2457c77029d97))
* :sparkles: add 'defer until a future date' option (closes [#8](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/8)) ([54dc5c1](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/54dc5c1f4a968effb6e8fc8e8858898ee961d8b8))
* :sparkles: don't include "schedule for tomorrow" in prompt if already scheduled for tomorrow ([e5a6c0f](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/e5a6c0fa07c017af826fd48d0c0046156d0e15ba)), closes [#6](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/6)
* :sparkles: use custom complete for parent task if installed (closes [#1](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/1)) ([d253f0c](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/d253f0cad43766338d51698e61b146c083113669))



# [1.1.0](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.0.2...v1.1.0) (2023-01-31)


### Features

* :sparkles: Add 'stop working on' option ([eee8f07](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/eee8f076252a40da779011e631fe81f1392c1449))



## [1.0.2](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.0.1...v1.0.2) (2022-04-07)


### Bug Fixes

* :bug: fix bug where name was shown as '1' in dialogue, closes [#2](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/2) ([eb504bd](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/eb504bd5777401d47b10ad6ca537e9eb0ca22d8c))
* :bug: fix bug where non-word characters (e.g. parentheses) at end of name were dropped, closes [#3](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues/3) ([572267b](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/572267b2c73771f6bc6bf7c9067d79fc517a5ef3))



## [1.0.1](https://github.com/ksalzke/work-on-omnifocus-plug-in/compare/v1.0.0...v1.0.1) (2022-03-08)


### Bug Fixes

* :bug: fix bug in onComplete function if task is not a 'Work on' task ([ad99fe9](https://github.com/ksalzke/work-on-omnifocus-plug-in/commit/ad99fe9be68b763fe2f304a2ad8bc6803167f86b))



# 1.0.0 (2022-03-02)



