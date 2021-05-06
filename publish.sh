#! /bin/bash
function confirm()
{
    echo -n "$@ "
    read -e answer
    for response in y Y yes YES Yes Sure sure SURE OK ok Ok
    do
        if [ "_$answer" == "_$response" ]
        then
            return 0
        fi
    done

    # Any answer other than the list above is considered a "no" answer
    return 1
}

confirm Are you sure you want to deploy?
 if [ $? -eq 0 ]
 then
   if ! git pull
    then
        echo >&2
        read -rsp $'Press enter to exit..' key
        exit 1
    fi
   version=$(npm --no-git-tag-version version patch)

   yarn run build
   yarn publish
   git commit -a -m "Published web-ui to NPM $version"
   git push
   read -rsp $'Done!!! Press enter to exit..' key
 fi

