### activeobject:resume

Build project: `grunt build`
Generate resume pdf: `grunt connect makepdf`
Release: 'grunt release'

Export upstart job:

	`sudo foreman export upstart /etc/init --app=resume -u admin -l /home/admin/logs`