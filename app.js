document.addEventListener('DOMContentLoaded', function() {
  // lisaaMuistiinpano(); // Kommentoitu pois, jotta muistiinpanoja ei lisätä automaattisesti sivun latauksen yhteydessä
});

function lisaaMuistiinpano() {
  var otsikkoInput = document.getElementById("otsikkoInput");
  var tekstiInput = document.getElementById("tekstiInput");

  var otsikko = otsikkoInput.value.trim();
  var teksti = tekstiInput.value.trim();

  if (otsikko !== "" && teksti !== "") {
    var muistiinpano = document.createElement("div");
    muistiinpano.className = "muistiinpano";

    var otsikkoElement = document.createElement("h2");
    otsikkoElement.className = "otsikko";
    otsikkoElement.textContent = otsikko;

    var tekstiElement = document.createElement("p");
    tekstiElement.className = "teksti";
    tekstiElement.textContent = teksti;

    var muokkaaButton = document.createElement("button");
    muokkaaButton.textContent = "Muokkaa";
    muokkaaButton.addEventListener('click', function() {
      muokkaaMuistiinpanoa(muistiinpano, otsikkoElement, tekstiElement);
    });

    var poistaButton = document.createElement("button");
    poistaButton.textContent = "Poista";
    poistaButton.addEventListener('click', function() {
      poistaMuistiinpanoa(muistiinpano);
    });

    muistiinpano.appendChild(otsikkoElement);
    muistiinpano.appendChild(tekstiElement);
    muistiinpano.appendChild(muokkaaButton);
    muistiinpano.appendChild(poistaButton);

    document.getElementById("muistiinpanot").appendChild(muistiinpano);

    // Tyhjennä tekstikentät lisäyksen jälkeen
    otsikkoInput.value = "";
    tekstiInput.value = "";
  } else {
    alert("Syötä otsikko ja teksti.");
  }
}

function muokkaaMuistiinpanoa(muistiinpano, otsikkoElement, tekstiElement) {
  var uusiOtsikko = prompt("Anna uusi otsikko:", otsikkoElement.textContent);
  if (uusiOtsikko !== null) {
    otsikkoElement.textContent = uusiOtsikko;
  }

  var uusiTeksti = prompt("Anna uusi teksti:", tekstiElement.textContent);
  if (uusiTeksti !== null) {
    tekstiElement.textContent = uusiTeksti;
  }
}

function poistaMuistiinpanoa(muistiinpano) {
  muistiinpano.remove();
}
