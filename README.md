Двухстраничный статичный сайт с использованием Vue.
На одной странице таблица, например TOP-10 фильмов с несколькими характеристиками (Название, Жанр, Год выхода и т.п.)
На другой - список, например, кинотеатров (в т.ч. online).
При наведении курсора мыши на строку первой страницы или отдельное поле,
следует выводить всплывающее сообщение с перечислением кинотеатров, где фильм доступен (можно значения каждый раз случайным образом).
- Картинки и прочая графика не обязательны. Текст может быть вымышленным.
- Вместо фильмов и кинотеатров, можно Музыкальные композиции с сервисами/магазинами и т.п. Область не имеет значения.
- Желательно использование virtual DOM и single-file component.
***
API взято отсюда https://kinopoiskapiunofficial.tech/documentation/api/#/films/get_api_v2_2_films_top
В данный момент для всех новых юзеров лимит - 500 запросов в сутки
поэтому если лимит закончился необходимо получить API-KEY здесь через регистрацию https://kinopoiskapiunofficial.tech/
и указать его в *env.
a
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
