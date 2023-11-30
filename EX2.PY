def classify_switch(model_number, placementlelo):
    model_numeric = ''.join(c for c in model_number if c.isdigit())

    placementlelo = int(placementlelo)

    if model_numeric in ['5200', '5250', '5270'] and placementlelo <= 24:
        return "Type 1"

    elif model_numeric in ['5200', '5250', '5270', '5300', '5350', '5370'] and placementlelo > 24 or model_numeric == '5400':
        return "Type 2"

    elif "-S" in model_number or model_number.endswith("NX"):
        return "Core"

    else:
        return "Unknown"