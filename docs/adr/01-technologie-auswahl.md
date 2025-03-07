# 1. Entscheidung: Technologie-Stack für CareConnect

- **Datum:** 2025-03-07
- **Status:** Angenommen
- **Autoren:** Semih Sönmez, Metin Gökcen, Niklas Reis

## 1. Kontext
Das CareConnect-Projekt wird sowohl auf Tablets und PCs in Pflegeheimen als auch als mobile App für die Angehörigen genutzt. Daher muss die Anwendung sowohl auf Desktops als auch auf mobilen Geräten optimal funktionieren.

## 2. Entscheidung
Wir haben uns entschieden, React für die Webanwendung und Expo für die mobile App zu verwenden

## 3. Begründung
- **React:** Ermöglicht eine flexible, wartbare und komponentenbasierte Architektur für die Web-App. Zudem haben wir React in der Vorlesung gelernt, sodass wir bereits Erfahrung damit haben
- **Expo:** Vereinfacht die Entwicklung der mobilen App mit React Native, insbesondere für plattformübergreifende Funktionen
- **Einheitlicher Code:** Da React und React Native eine ähnliche Syntax haben, können viele Komponenten für Web und Mobile wiederverwendet werden
- **Einfaches Deployment:** Expo bietet eine einfache Bereitstellung für iOS und Android
- **Bessere Wartbarkeit:** Durch die Nutzung von React im gesamten Stack wird der Entwicklungsaufwand reduziert und die Konsistenz der Codebasis erhöht

## 4. Alternativen
- **Flutter:** Hätte eine leistungsstarke plattformübergreifende Entwicklung ermöglicht, aber erfordert Dart-Kenntnisse und ist weniger geeignet für Web-Anwendungen

## 5. Konsequenzen
- Die Webanwendung wird mit React entwickelt und kann auf PCs und Tablets genutzt werden
- Die mobile App wird mit Expo entwickelt und auf iOS sowie Android bereitgestellt
- Zusätzliche Tests und Optimierungen sind erforderlich, um eine reibungslose UX auf allen Geräten zu gewährleisten
- Entwickler müssen mit React sowie React Native arbeiten, was eine gewisse Lernkurve für React Native bedeutet

