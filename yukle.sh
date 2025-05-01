#!/bin/bash
read -p "GitHub kullanıcı adın: " USERNAME
read -p "Repo adı (önceden GitHub'da oluşturulmuş olmalı): " REPO
read -p "Commit mesajı: " COMMIT_MSG
git init
git add .
git commit -m "$COMMIT_MSG"
git remote remove origin 2> /dev/null
git remote add origin https://github.com/$USERNAME/$REPO.git
git branch -M main
git push -u origin main
echo "✅ GitHub’a başarıyla yüklendi: https://github.com/$USERNAME/$REPO"
