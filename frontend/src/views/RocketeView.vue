<template>
  <main>
    <!-- Container for the general information about the rocket -->
    <div class="rocket-info">
      <h2>Siren</h2>
      <p>
        Die Mission Fortuna ist SUNDSPACE’s erster großer Schritt in Richtung
        Sternenhimmel. Mit „SIREN“, der ersten Rakete des Teams, möchte
        SUNDSPACE Fuß in der Raketen- und Raumfahrtforschung fassen. SIREN soll
        bereits im Jahr 2024 ihren ersten Testflug erfolgreich meistern, um im
        Jahr darauf dann am Wettbewerb teilnehemn zu können. Ihre
        Antriebseinheit wird durch ein eigens konzipiertes Hybridtriebwerk
        gebildet. Bei einem solchen Triebwerk wird in der Regel ein flüssiger
        Oxidator aus dem Tanksystem durch eine Struktur festen Brennstoffes
        geleitet.
        <br /><br />
        Feststoffstruktur aus einem auf Kohlenstoff basierendem Brennstoff (Bei
        uns PE, HTPB oder Paraffin) geleitet. Die Festlegung auf Lachgas fiel
        bei der Entscheidung besonders leicht, da es keine toxischen
        Eigenschaften besitzt, bei Raumtemperatur in flüssigem Zustand lagerbar
        ist und es erst nach dem Zerfall in Sauerstoff und Stickstoff
        hochreaktiv ist. Somit kann eine sichere Handhabung des Triebwerkes und
        des Oxidators gewährleistet werden, da eine Selbstzündung oder
        unkontrollierte Verbrennung ausgeschlossen werden kann. Das sich nun in
        der Entwicklung befindende Triebwerk muss selbstverständlich in einem
        geeigneten Gestell befestigt werden. Als Gestell wird uns ein
        teilmodulares Gerüst dienen, welches in die aus Faserverbundwerkstoffen
        oder Metallblech gefertigte Außenhaut eingeschoben werden kann. Um die
        Rakete während des Fluges zu stabilisieren, werden wir die Rakete mit
        insgesamt 8 Finnen ausstatten: 4x passive Finnen, die am unteren Ende
        der Rakete das Kippen der Rakete verhindern sollen und 4x aktive Finnen,
        die die Rotation der Rakete aktiv steuern können. Zu guter Letzt muss
        die Rakete wieder sicher zurück auf dem Boden landen. Dazu werden wir
        zunächst ein klassisches Fallschirmsystem aus einem kleinem
        Bremsfallschirm und einem großen Landefallschirm verwenden. Wie erhoffen
        uns mit unserer Rakete nicht nur Einblicke in die Luft- und
        Raumfahrttechnik zu erhalten sondern möglicherweise auch einen kleinen
        Beitrag zur Erforschung von Hybridtriebwerken oder anderen Raketensystem
        leisten zu können.
      </p>
    </div>

    <!-- Container for additional elements related to the rocket -->
    <div class="parent">
      <!-- Section describing the parachute system -->
      <div class="parachute info-element">
        <h2>Fallschirm</h2>
        <div class="line"></div>
        <p>
          Das Fallschirmsystem unserer Rakete, die für den EUROC-Wettbewerb
          entwickelt wurde, spielt eine entscheidende Rolle bei der sicheren
          Rückführung der Nutzlast. Nach dem Erreichen der geplanten Flughöhe
          von 3000 Metern wird das zweistufige Fallschirmsystem ausgelöst.
          Zunächst sorgt ein kleinerer Drogue-Fallschirm für die Stabilisierung
          und Verlangsamung des Abstiegs. Auf einer Höhe von etwa 500 Metern
          öffnet sich dann der Hauptfallschirm, um eine sanfte Landung der
          Rakete zu gewährleisten. Das gesamte System wurde sorgfältig berechnet
          und getestet, um sowohl die Strukturintegrität der Rakete als auch die
          Sicherheit der Nutzlast zu gewährleisten.
        </p>
      </div>

      <!-- Section describing the rocket’s electronics -->
      <div class="electronics info-element">
        <h2>Elektronik</h2>
        <div class="line"></div>
        <p>
          Die On-Board-Elektronik unserer Rakete, die beim EUROC-Wettbewerb
          eingesetzt wird, ist ein zentraler Bestandteil für die erfolgreiche
          Mission. Sie umfasst ein Flight-Computer-System, das für die Steuerung
          und Überwachung aller kritischen Prozesse verantwortlich ist. Dazu
          gehören die Erfassung und Aufzeichnung von Flugdaten, die Auslösung
          des Fallschirmsystems in den richtigen Phasen sowie die Aktivierung
          von Sicherheitssystemen im Notfall. Zudem sind verschiedene Sensoren
          wie Höhenmesser, Beschleunigungssensoren und GPS-Module integriert, um
          präzise Echtzeit-Daten zu liefern. Diese Informationen werden sowohl
          für die Steuerung während des Flugs als auch für die spätere Analyse
          genutzt. Die Elektronik wurde speziell entwickelt und programmiert, um
          unter den extremen Bedingungen eines Raketenflugs zuverlässig zu
          funktionieren.
        </p>
      </div>

      <!-- Section describing the rocket engine -->
      <div class="engine info-element">
        <h2>Triebwerk</h2>
        <div class="line"></div>
        <p>
          Das Triebwerk unserer Rakete, entwickelt für den EUROC-Wettbewerb, ist
          das Herzstück der Mission. Es handelt sich um ein Feststofftriebwerk,
          das sorgfältig ausgewählt und optimiert wurde, um die Rakete auf die
          geplante Höhe von 3000 Metern zu bringen. Das Triebwerk liefert den
          notwendigen Schub, um die Rakete sicher durch die verschiedenen Phasen
          des Flugs zu bringen, vom Start bis zum Erreichen der Maximalhöhe.
          Besonderes Augenmerk wurde auf die thermische Stabilität und die
          effiziente Verbrennung des Treibstoffs gelegt, um eine gleichmäßige
          Beschleunigung und optimale Flugbahn zu gewährleisten. Das Design des
          Triebwerks und die Auswahl der Materialien wurden intensiv getestet,
          um den extremen Bedingungen standzuhalten und gleichzeitig die
          Sicherheit des gesamten Systems zu gewährleisten. Zudem wurde das
          Triebwerk so konstruiert, dass es sich nahtlos in die gesamte
          Raketenstruktur integriert und maximale Leistung bei minimalem Gewicht
          bietet.
        </p>
      </div>

      <!-- Placeholder for a Rocket component -->
      <div class="rocket-element">
        <Rocket></Rocket>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Rocket from '../components/RocketComponent.vue';
</script>

<style scoped lang="css">
/* Styling for the general rocket information section */
.rocket-info {
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox layout */
  align-items: center; /* Center items vertically */
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center items horizontally */
}

/* Styling for information elements with padding */
.info-element {
  padding-bottom: 10rem; /* Bottom padding for spacing */
}

/* Styling for headings and paragraphs in rocket-info section */
.rocket-info h2,
.rocket-info p {
  color: var(--text-color); /* Text color */
  padding-left: 10rem; /* Left padding for alignment */
  padding-right: 10rem; /* Right padding for alignment */
  text-align: left; /* Center-align text */
}

/* Styling for headings in rocket-info section */
.rocket-info h2 {
  padding-top: 10rem; /* Top padding */
  font-weight: bold; /* Bold font weight */
  font-size: 48px; /* Font size */
}

/* Styling for paragraphs in rocket-info section */
.rocket-info p {
  padding-bottom: 10rem; /* Bottom padding */
  font-style: italic; /* Italic font style */
}

/* Styling for the parent container, using grid layout */
.parent {
  display: grid; /* Grid layout */
  grid-template-columns: repeat(3, 1fr); /* Three equal-width columns */
  grid-template-rows: repeat(3, 1fr); /* Three equal-height rows */
  gap: 8px; /* Gap between grid items */
  height: auto; /* Auto height */
}

/* Styling for headings and paragraphs in parent container sections */
.parent div h2 {
  font-weight: bold; /* Bold font weight */
  text-transform: uppercase; /* Uppercase text */
  color: var(--secondary-color); /* Heading color */
  padding-left: 5rem; /* Left padding */
  font-size: 24px; /* Font size */
}

.parent div p {
  color: var(--text-color); /* Paragraph color */
  padding-left: 7.5rem; /* Left padding */
  padding-top: 1.5rem; /* Top padding */
  padding-right: 5rem; /* Right padding */
}

/* Specific grid item styling */
.parachute {
  grid-column: span 2 / span 2; /* Span two columns */
}

.electronics {
  grid-column: span 2 / span 2; /* Span two columns */
  grid-column-start: 1; /* Start from the first column */
  grid-row-start: 2; /* Start from the second row */
}

.engine {
  grid-column: span 2 / span 2; /* Span two columns */
  grid-column-start: 1; /* Start from the first column */
  grid-row-start: 3; /* Start from the third row */
}

.rocket-element {
  grid-row: span 3 / span 3; /* Span three rows */
  grid-column-start: 3; /* Start from the third column */
  grid-row-start: 1; /* Start from the first row */
  width: 100%; /* Full width */
  max-width: 25vw; /* Maximum width of 25% of the viewport width */
  z-index: 1; /* Layer order */
  overflow: hidden; /* Hide overflow content */
}

/* Styling for the line element */
.line {
  position: relative; /* Relative positioning */
  left: 10vw; /* Left offset */
  height: 2px; /* Line height */
  background-color: var(--secondary-color); /* Line color */
  z-index: 2; /* Layer order */
}

/* Styling for the Rocket component placeholder */
Rocket {
  height: 100%; /* Full height */
  overflow: hidden; /* Hide overflow content */
}
</style>
