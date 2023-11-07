class MyList(list):
    """ my parent child"""
    def print_sorted(self):
        """my child class"""
        sorted_list = sorted(self)
        print(sorted_list)
