// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

exports.transform = function (model) {

  model.testData = parseModel(model);

  return model;

  function parseModel(model) {
    var testData = JSON.stringify(model);
    return testData;
  }
}
