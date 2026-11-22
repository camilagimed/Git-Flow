# Git flow
# 1 -> Configuração inicial

```bash
git config --global user.name "Seu user name"
git config --global user.email "seuemail@email.com"
```
# 2. Criação e clonagem de repositórios

```bash
git init
git clone URL_DO_REPOSITORIO
```

# 3. Verificar alterações
```bash
git status
git diff
git log
git log --oneline
```
# 4. Adicionar arquivos e criar commits

```bash
git add .
git add nome-do-arquivo
git commit -m "mensagem do commit"
```
# 5. Enviar alterações para o GitHub

```bash
git push
git push origin main
git push -u origin nome-da-branch
```
# 6. Atualizar o repositório local

```bash
git pull
git fetch
```
# 7. Criar e trocar de branches

```bash
git branch
git branch nome-da-branch
git switch nome-da-branch
git switch -c nome-da-branch
```
# 8. Mesclar branches

```bash
git merge nome-da-branch
```

# 9. Excluir branches

```bash
git branch -d nome-da-branch
git push origin --delete nome-da-branch
```

# 10. Corrigir commits

```bash
git commit --amend -m "nova mensagem"
git commit --amend --no-edit
```

# 11. Desfazer alterações e commits

```bash
git restore nome-do-arquivo
git revert HASH_DO_COMMIT
git reset --soft HEAD~1
git reset --mixed HEAD~1
```

# 12. Trabalhando com Git Flow

O Git Flow ele pode organizar o desenvolvimento utilizando diferentes branches:

- **main:** contém a versão estável do projeto.
- **develop:** reúne as funcionalidades em desenvolvimento.
- **feature:** utilizada para criar novas funcionalidades.
- **release:** utilizada para preparar uma nova versão.
- **hotfix:** utilizada para corrigir problemas urgentes.

-> Comandos:

```bash
git switch -c develop
git switch -c feature/nova-funcionalidade
git switch develop
git merge feature/nova-funcionalidade
git switch -c release/1.0
git switch -c hotfix/correcao
```