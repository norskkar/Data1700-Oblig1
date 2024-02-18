let billetRegister = [];
let teller = 0;

function kjøpBillett() {
    const film = document.getElementById("velgFilm").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const billet = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };

    //Setter/nullstiller telleren til 0
    teller = 0;

    //Inputvalidering for antall, vet ikke hvordan jeg skal gjøre det slik at
    //det bare blir heltall
    if (isNaN(billet.antall) || billet.antall <= 0) {
        let ut = "Antall må være et tall og større enn null";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingAntall").innerHTML = ut;
    }
    else {
        teller++;
    }

    //Valideringer for fornavn, etternavn, telefonnr og epost. Se nederst for funksjonene
    fornavnValidering(billet.fornavn);

    etternavnValidering(billet.etternavn);

    telefonnrValidering(billet.telefonnr);

    epostValidering(billet.epost);

    if (teller === 5) {
        billetRegister.push(billet);
        visBilletter();
        //nullstiller inputboksene
        document.getElementById("velgFilm").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

        document.getElementById("feilmeldingAntall").value = "";
        document.getElementById("feilmeldingFornavn").value = "";
        document.getElementById("feilmeldingEtternavn").value = "";
        document.getElementById("feilmeldingTelefonnr").value = "";
        document.getElementById("feilmeldingEpost").value = "";
    }
}

function visBilletter() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetRegister) {
        ut += "<tr>";
        ut += "<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+
            "</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
        ut += "</tr>";
    }
    ut += "</table>";

    document.getElementById("billetter").innerHTML = ut;
}

function slettBillettRegister() {
    billetRegister.length = 0;
    visBilletter();
}

function fornavnValidering(fornavn) {
    //Fikk regex-en fra https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    let fornavnValidering = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!fornavnValidering.test(fornavn)) {
        let ut = "Ugyldig fornavn";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingFornavn").innerHTML = ut;
    }
    else {
        teller++;
    }
}

function etternavnValidering(etternavn) {
    //Fikk regex-en fra https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    let etternavnValidering = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!etternavnValidering.test(etternavn)) {
        let ut = "Ugyldig etternavn";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingEtternavn").innerHTML = ut;
    }
    else {
        teller++;
    }
}

function telefonnrValidering(telefonnr) {
    //Fikk fra en venn, de fra nettet funka ikke
    let telefonnrValidering = /^(\+47)?\d{8}$/;

    if (!telefonnrValidering.test(telefonnr)) {
        let ut = "Ugyldig telefonnr";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingTelefonnr").innerHTML = ut;
    }
    else {
        teller++;
    }
}

function epostValidering(epost) {
    // Fikk regex-en fra https://www.wired.com/2008/08/four-regular-expressions-to-check-email-addresses/
    let epostValidering =  /.+\@.+\..+/;

    if (!epostValidering.test(epost)) {
        let ut = "Ugyldig e-postadresse";
        ut = ut.fontcolor("RED");
        document.getElementById("feilmeldingEpost").innerHTML = ut;
    }
    else {
        teller++;
    }
}

