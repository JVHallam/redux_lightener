#!/bin/bash

npx jest;
TEST_RESULT=$?;
echo "Test Result : $TEST_RESULT";
exit $TEST_RESULT;
