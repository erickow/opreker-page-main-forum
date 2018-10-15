Semantic Versioning
===================
Details:

* [SemVer](http://semver.org/)

* [APR](http://apr.apache.org/versioning.html)

> Versions are denoted using a standard triplet of integers: MAJOR.MINOR.PATCH. The basic intent is that MAJOR versions are incompatible, large-scale upgrades of the API. MINOR versions retain source and binary compatibility with older minor versions, and changes in the PATCH level are perfectly compatible, forwards and backwards.


Patch level changes could also be for correcting incorrect APIs. In this case, the previous patch release may be incompatible, but because of bugs.

Minor versions may introduce new features, but do not alter any of the previous API.

Major versions may introduce new features *and* change the old API in incompatible ways.

Git workflow
============
* [Original blog post](http://nvie.com/archives/323/) by Vincent Driessen
* [Helpful scripts](http://github.com/zaach/gitflow)

The different types of branches we may use are:

* `production`
	* production releases
		
* `master`
	* AKA integration branch
		
* Release branches (`release-*`)
	* for finalizing a major/minor release, branched from `master`
		
* Hotfix branches (`hotfix-*`)
	* for applying patches, branched from production (or support-* for older releases)
		
* Support branches (`support-*`)
	* for applying patches to old release versions, branched from `production`
		
* Feature branches (`feature-*`)
	* for developing features or wild speculation, branched from `master`

![chart](http://nvie.com/wp-content/uploads/2009/12/Screen-shot-2009-12-24-at-11.32.03.png)

Feature branches
----------------
Created for feature development that may require several or more commits to produce a working tree. May make occasional merges from `master` to keep it up to date. If it will be separate for an extended period of time, create a feature-branch-readme.txt in the top level directory dictating the reason for the branch.

**May branch off from**: `master`
	
	$ git checkout -b myfeature master

**Must merge back into**: `master`
	
	$ git checkout master
	$ git merge --no-ff myfeature
	$ git branch -d myfeature
	$ git push origin master

![feature](http://nvie.com/wp-content/uploads/2009/12/fb.png)

Release branches
----------------
Release branches are created when the `master` branch is at a stable point and release specific changes need to be made, such as bumping version numbers, etc. At that point, `master` should be branched and the changes made before ultimately merging it into `production` and tagging the release. There should only be one active release branch at a time. Until the current release is wrapped up, merged into `production` and deleted, development of the next release should take place on `master`. When `master` reaches another state of stability for release, another release branch is be created.

**May branch off from**: `master`
	
	$ git checkout -b release-1.2 master
	$ ./bump-version.sh 1.2
	$ git commit -a -m "Bumped version number to 1.2"
	
Bug fixes made on a release branch may be merged back into `master` continuously if needed, though ultimately they will be merged in when the release is finalized.

**Must merge back into**: `master` and `production`
	
	$ git checkout production
	$ git merge --no-ff release-1.2
	$ git tag 1.2
	
	$ git checkout master
	$ git merge --no-ff release-1.2

At this point the release branch is safe to delete, since the changes are reflected in `master` and `production`. If the branch is remote, [remove the remote branch](http://github.com/guides/remove-a-remote-branch) also.
	$ git branch -d release-1.2
	
Hotfix branches
---------------
Patches that need to be made to the most recent production release are applied to a hotfix branch off `production`.  For older releases, hotfixes branch off a `support-*` branch (explained later.)

**May branch off from**: `production`
	
	$ git checkout -b hotfix-1.2.1 production
	$ ./bump-version.sh 1.2.1
	$ git commit -a -m "Bumped version number to 1.2.1"
	
	$ git commit -m "Fixed severe production problem"
	
**Must merge back into**: `master` and `production`
	
	$ git checkout production
	$ git merge --no-ff hotfix-1.2.1
	$ git tag 1.2.1
	
Merge into `master` only if there is no current release branch, otherwise, merge into release branch instead.
	
	$ git checkout master
	$ git merge --no-ff hotfix-1.2.1
	
Finally, delete.
	$ git branch -d hotfix-1.2.1

![hotfix](http://nvie.com/wp-content/uploads/2010/01/hotfix-branches1.png)
	
Support branches
----------------

If `production` has moved on a point release (1.0, 1.1, 2.0, etc) and a hotfix must be applied to a older version ( e.g 1.x):

* create a `support-1.x` branch (if none exists) based on the newest 1.x tag in `production`
* create a branch (e.g. `hotfix-1.1.1`), based on `support-1.x`
* fix the bug and merge `hotfix-1.1.1` back into `support-1.x`
* Do this for other older major releases as necessary
	
The support branch effectively becomes a production branch for a past version.
