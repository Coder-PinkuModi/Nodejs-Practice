// Making of a server with RestApi:--

1.get/api/users/:id - Get the user with ID :id-----------done
+ creating users data route: get/users for phone users to display all users----------cone

Logic:-Dynaqmic Path Parameters:
get/api/users/:id
:id -> Variable |Dynamic

2.post /api/users - Create new user-------------------done

3.patch /api/users/:id - Edit the user with Id :id--------done

4.delete /api/users/:id - Delete the user with ID :id //right now let's do not work upon this as we dont know how to create a dynamic and unique id- unlike a serial number id, which if deleted any of them then it can be a problem incase of put request as we are dealing that operaton with using length of the users array