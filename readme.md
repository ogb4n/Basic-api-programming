### Configuration :

> Le port est configuré dans un fichier `.env` à la racine de chaque projet. **Il est laissé volontairement ici pour le test du projet mais dans une prod réelle il serait bien sûr nécéssaire de l'exclure du repo grâce au .gitignore**.

Il est possible de le changer à tout moment pour faire tourner les projets sur le où les ports souhaités.

### Le projet en Typescript :

Api qui renvoie les headers de la requête GET vers /ping en JSON.

Pour démarrer le projet :

```bash
yarn
```

```bash
yarn start
```

Elle n'utilise aucune librairie externe. Seulement les packages de base nécéssaires à la résolution du projet en Typescript.

### Le projet en Rust :

Même api qui renvoie la même chose, mais en Rust.

Pour démarrer le projet :

```bash
cargo run
```

Le projet utilise cette fois c'est libs externes :

- actix-web `version '4'`
- serde_json `version '1.0'`
- serde `version '1.0'`
- tokio `version '1'`
- dotenv `version '0.15.0'`
