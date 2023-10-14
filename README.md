# Users services

### Техническое задание

Нужно реализовать 2 сервиса. Один сервис пользователей, другой сервис истории действий с
пользователями. В сервисе пользователей должно быть 3 endpoint:

1. Создание пользователя
2. Изменение пользователя
3. Получение списка пользователей

В сервис “истории действий с пользователями” нужно отправлять события создания пользователя
и изменения. Общение сервисов может происходить любым способом. Сервис “истории действий
с пользователями” должен иметь ручку, которая отдаст историю действий с фильтрами по id
пользователя и постраничной навигацией. Фреймворк так же может быть любой. Один из
сервисов должен быть на JS, для второго можно использовать TS. СУБД - postgresql

### Service1

#### Endpoints

1. Get users list `/users/list` - method `GET`;
2. Create user `/users/create` - method `POST`, body data: [`email`, `name`]: [`string`, `string`];
3. Update user `/users/update` - method `PATCH`, body data: [`email`, `newName`, `newEmail`]: [`string`, `string`, `string`];

### Service2

#### Endpoints

1. Get actions list `/actions/list` - method `GET`, query params: [`userId`, `pageNum`]: [`string`, `string`];
2. Create specific action `/actions/create` - method `POST`, body data: [`userId`, `action`]: [`number`, `string`];
