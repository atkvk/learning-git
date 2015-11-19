
# Learning

- Edit from github online

## Working with branches
- Create a new local branch
- Push it to the remote 

## Commands

### Add/Remove files

Add file/directory to git

``` 
git add myfile.txt 
git add ./my-dirctory 

```

Remove file from git

``` git rm myfile.txt ```

### Branch

Create a new branch

``` git checkout -b [my feature branch] ```

Switch to branch

``` git checkout [my branch] ```

Push branch to remote

``` git push origin [my branch] ```

Merge branches

- switch to branch A
- merge with branch B  

```
    git checkout branchA 
    git merge branchB
```

Delete branch

``` git branch -d [my branch] ```

Remove a remote branch

``` git push origin :[my branch to be delete] ```  ???

Clean up deleted remote branches 

``` git remote prune origin ```

### Tag

List all tags

``` git tag ```

Add new tag

``` git tag -a v0.0.1 - m "Version 0.0.1" ```

Push new tags

``` git push --tags ```

### Collaboration

- git clone   ``` git clone https://github/git-repo.git  [my git-repo] ```
- git fetch 
- git pull  = fetch + merge
- git push

### Remote 

- Show remote branches  ``` git remote show origin ```



## Todo
- Use rebase to reduce merge commit
- Password caching: [Setup git](https://help.github.com/articles/set-up-git/)
- Use Visual Studio to connect to GitHub repositories
