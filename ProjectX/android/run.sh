#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n my.little.android.project/host.exp.exponent.MainActivity
