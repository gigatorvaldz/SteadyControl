# SteadyControl
Docker | Nest JS | Next JS | MongoDB
---

Запуск:

### Docker
```
docker-compose up
```

По умолчанию:

Client: [localhost:3000](http://localhost:3000/)
Server: [localhost:5000](http://localhost:5000/)

---

### Вручную

Nest JS
```
npm install

npm run start:dev
```
Необходимо заменить:
В файле env DB_URL на актуальный;

Next JS

```
npm install

npm run dev
```
Заменить API_URL на актуальный для http utils;


По умолчанию:

Client: [localhost:3000](http://localhost:3000/)
Server: [localhost:5000](http://localhost:5000/)

---

### Примечания:

Иерархия может свободно кофигурироваться, алгоритм рассчитан на любую длину цепочки. На сайте приведён пример из ТЗ.

В ТЗ не было указано на каком фреймворке нужно построить Backend, потому взял Nest JS.

Всё должно отлично запускаться как через Docker, так и вручную. В выборе инструментов и решений придерживался ТЗ и вакансии. В случае возникновения каких-либо вопросов прошу отписаться.
