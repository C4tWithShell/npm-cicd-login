# NPM CI/CD Login

Login into NPM within CI/CD, uses `npm login` in the background.

### Usage:
```
npm install -g npm-cicd-login

NPM_USERNAME=UserName \
NPM_PASSWORD=Password \
NPM_EMAIL=user@example.com \
npm-cicd-login
```

### Supported environment variables:

| Name           | Description                                                     | Required |
| -------------- | --------------------------------------------------------------- | -------- |
| `NPM_USERNAME` | Username on the registry                                        | yes      |
| `NPM_PASSWORD` | Password for the user (or token on some registries like Github) | yes      |
| `NPM_EMAIL`    | Email for the user                                              | yes      |
| `NPM_REGISTRY` | Registry url - if you have a custom registry                    | no       |
| `NPM_SCOPE`    | Organisation scope                                              | no       |
