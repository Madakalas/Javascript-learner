import re
def classifySwitch(modelnumber):
    pattern = re.compile(r'^([A-Za-z]+\d*-[X\d]+-[A-Za-z\d-]+[A-Za-z]+\d*[X\d]+-[A-Za-z\d]+)$')
    if not pattern.match(modelnumber):
        print("Invalid model number")
        return
    match = re.match(r'([A-Za-z]+\d*[X\d]+)-(\d+)(-[X\d]+)?$')
    if match:
        model,port,satck_info=match.groups()
        if model in ['5200' ,'5250','5270'] and int(port) <=24:
            print(f"{port} Type 1")
        elif model in['5200','5250','5270','5300','5350','5370'] and int(port<=24):
            print(f"{pork} Type2")
        elif stack_info and stack_info.startswitch('-S') and satck_info[2:].isdigit():
             print(f"{pork} Core")
        else:
          print("Invalid model nmber")
    else:
      print("invalid model number")
        
    classifySwitch("c5200L - 12p")