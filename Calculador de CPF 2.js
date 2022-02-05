function calcCPF(p) {
  var newP = p.trim();
  var pLimpo = "";
  var carac = "";

  for (var i = 0; i <= newP.length - 1; i++) {
    if (!isNaN(newP.substring(i, i + 1)) === true) {
      carac = newP.substring(i, i + 1);
      pLimpo = pLimpo + carac;
    }
  }

  // CPF

  if (pLimpo.length <= 11) {
    var sum = 0;
    pLimpo = pLimpo.padStart(11, "0");

    for (var i = 0, j = 10; i <= pLimpo.length - 1, j >= 2; i++, j--) {
      sum += parseInt(pLimpo[i] * j);
    }

    console.log("sum: " + sum);
    console.log("sum%11: " + (sum % 11));

    if (sum % 11 >= 10 || sum % 11 == 0) {
      var firstDigit = 0;
    } else {
      var firstDigit = 11 - (sum % 11);
    }

    var secondP = pLimpo.substring(0, 9) + firstDigit;
    var sum2 = 0;

    for (var i = 0, j = 11; i <= secondP.length - 1, j >= 2; i++, j--) {
      sum2 += parseInt(secondP[i] * j);
    }
    console.log("sum2: " + sum2);
    console.log("sum2%11: " + (sum2 % 11));

    if (11 - (sum2 % 11) >= 10 || sum2 % 11 == 0) {
      var secondDigit = 0 + "";
    } else {
      var secondDigit = 11 - (sum2 % 11);
    }

    if (
      firstDigit == parseInt(pLimpo.substring(9, 10)) &&
      secondDigit == parseInt(pLimpo.substring(10, 11))
    ) {
      return (
        pLimpo.substring(0, 3) +
        "." +
        pLimpo.substring(3, 6) +
        "." +
        pLimpo.substring(6, 9) +
        "-" +
        firstDigit +
        secondDigit
      );
    } else {
      return false;
    }
  } else {
    // CNPJ

    var sum = 0;

    for (var i = pLimpo.length - 3, j = 2; i >= 4, j <= 9; i--, j++) {
      sum += parseInt(pLimpo[i]) * j;
    }

    for (var i = 3, j = 2; i >= 0, j <= 5; i--, j++) {
      sum += parseInt(pLimpo[i]) * j;
    }

    if (11 - (sum % 11) >= 10 || 11 - (sum % 11) === 0) {
      sum = 0;
      var firstDigit = sum + "";
    } else {
      var firstDigit = 11 - (sum % 11) + "";
    }

    var sum2 = 0;

    for (var i = pLimpo.length - 2, j = 2; i >= 4, j <= 9; i--, j++) {
      sum2 += parseInt(pLimpo[i]) * j;
    }

    for (var i = 4, j = 2; i >= 0, j <= 6; i--, j++) {
      sum2 += parseInt(pLimpo[i]) * j;
    }

    if (sum2 % 11 >= 10 || sum2 % 11 === 0) {
      sum2 = 0;
      var secondDigit = sum2 + "";
    } else {
      var secondDigit = 11 - (sum2 % 11) + "";
    }

    if (
      firstDigit === pLimpo.substring(12, 13) &&
      secondDigit === pLimpo.substring(13, 14)
    ) {
      return (
        pLimpo.substring(0, 2) +
        "." +
        pLimpo.substring(2, 5) +
        "." +
        pLimpo.substring(5, 8) +
        "/" +
        pLimpo.substring(8, 12) +
        "-" +
        firstDigit +
        secondDigit
      );
    } else {
      return false;
    }
  }
}

// CPF P/ TESTE: 25582468870
