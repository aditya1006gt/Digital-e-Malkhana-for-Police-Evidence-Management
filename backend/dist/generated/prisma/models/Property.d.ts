import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Property
 *
 */
export type PropertyModel = runtime.Types.Result.DefaultSelection<Prisma.$PropertyPayload>;
export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
};
export type PropertyAvgAggregateOutputType = {
    quantity: number | null;
};
export type PropertySumAggregateOutputType = {
    quantity: number | null;
};
export type PropertyMinAggregateOutputType = {
    id: string | null;
    category: $Enums.Category | null;
    belongingTo: $Enums.OwnerType | null;
    nature: $Enums.SeizureNature | null;
    quantity: number | null;
    location: string | null;
    description: string | null;
    photoUrl: string | null;
    qrCodeImage: string | null;
    qrString: string | null;
    status: $Enums.PropStatus | null;
    caseId: string | null;
};
export type PropertyMaxAggregateOutputType = {
    id: string | null;
    category: $Enums.Category | null;
    belongingTo: $Enums.OwnerType | null;
    nature: $Enums.SeizureNature | null;
    quantity: number | null;
    location: string | null;
    description: string | null;
    photoUrl: string | null;
    qrCodeImage: string | null;
    qrString: string | null;
    status: $Enums.PropStatus | null;
    caseId: string | null;
};
export type PropertyCountAggregateOutputType = {
    id: number;
    category: number;
    belongingTo: number;
    nature: number;
    quantity: number;
    location: number;
    description: number;
    photoUrl: number;
    qrCodeImage: number;
    qrString: number;
    status: number;
    caseId: number;
    _all: number;
};
export type PropertyAvgAggregateInputType = {
    quantity?: true;
};
export type PropertySumAggregateInputType = {
    quantity?: true;
};
export type PropertyMinAggregateInputType = {
    id?: true;
    category?: true;
    belongingTo?: true;
    nature?: true;
    quantity?: true;
    location?: true;
    description?: true;
    photoUrl?: true;
    qrCodeImage?: true;
    qrString?: true;
    status?: true;
    caseId?: true;
};
export type PropertyMaxAggregateInputType = {
    id?: true;
    category?: true;
    belongingTo?: true;
    nature?: true;
    quantity?: true;
    location?: true;
    description?: true;
    photoUrl?: true;
    qrCodeImage?: true;
    qrString?: true;
    status?: true;
    caseId?: true;
};
export type PropertyCountAggregateInputType = {
    id?: true;
    category?: true;
    belongingTo?: true;
    nature?: true;
    quantity?: true;
    location?: true;
    description?: true;
    photoUrl?: true;
    qrCodeImage?: true;
    qrString?: true;
    status?: true;
    caseId?: true;
    _all?: true;
};
export type PropertyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Properties to fetch.
     */
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PropertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType;
};
export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
    [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProperty[P]> : Prisma.GetScalarType<T[P], AggregateProperty[P]>;
};
export type PropertyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithAggregationInput | Prisma.PropertyOrderByWithAggregationInput[];
    by: Prisma.PropertyScalarFieldEnum[] | Prisma.PropertyScalarFieldEnum;
    having?: Prisma.PropertyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertyCountAggregateInputType | true;
    _avg?: PropertyAvgAggregateInputType;
    _sum?: PropertySumAggregateInputType;
    _min?: PropertyMinAggregateInputType;
    _max?: PropertyMaxAggregateInputType;
};
export type PropertyGroupByOutputType = {
    id: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl: string | null;
    qrCodeImage: string | null;
    qrString: string;
    status: $Enums.PropStatus;
    caseId: string;
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
};
type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropertyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropertyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropertyGroupByOutputType[P]>;
}>>;
export type PropertyWhereInput = {
    AND?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    OR?: Prisma.PropertyWhereInput[];
    NOT?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    id?: Prisma.StringFilter<"Property"> | string;
    category?: Prisma.EnumCategoryFilter<"Property"> | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFilter<"Property"> | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFilter<"Property"> | $Enums.SeizureNature;
    quantity?: Prisma.IntFilter<"Property"> | number;
    location?: Prisma.StringFilter<"Property"> | string;
    description?: Prisma.StringFilter<"Property"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Property"> | string | null;
    qrCodeImage?: Prisma.StringNullableFilter<"Property"> | string | null;
    qrString?: Prisma.StringFilter<"Property"> | string;
    status?: Prisma.EnumPropStatusFilter<"Property"> | $Enums.PropStatus;
    caseId?: Prisma.StringFilter<"Property"> | string;
    case?: Prisma.XOR<Prisma.CaseRecordScalarRelationFilter, Prisma.CaseRecordWhereInput>;
    custodyLogs?: Prisma.CustodyLogListRelationFilter;
    disposal?: Prisma.XOR<Prisma.DisposalNullableScalarRelationFilter, Prisma.DisposalWhereInput> | null;
    scanLogs?: Prisma.ScanLogListRelationFilter;
};
export type PropertyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    belongingTo?: Prisma.SortOrder;
    nature?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    qrCodeImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    qrString?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    case?: Prisma.CaseRecordOrderByWithRelationInput;
    custodyLogs?: Prisma.CustodyLogOrderByRelationAggregateInput;
    disposal?: Prisma.DisposalOrderByWithRelationInput;
    scanLogs?: Prisma.ScanLogOrderByRelationAggregateInput;
};
export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    qrString?: string;
    AND?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    OR?: Prisma.PropertyWhereInput[];
    NOT?: Prisma.PropertyWhereInput | Prisma.PropertyWhereInput[];
    category?: Prisma.EnumCategoryFilter<"Property"> | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFilter<"Property"> | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFilter<"Property"> | $Enums.SeizureNature;
    quantity?: Prisma.IntFilter<"Property"> | number;
    location?: Prisma.StringFilter<"Property"> | string;
    description?: Prisma.StringFilter<"Property"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Property"> | string | null;
    qrCodeImage?: Prisma.StringNullableFilter<"Property"> | string | null;
    status?: Prisma.EnumPropStatusFilter<"Property"> | $Enums.PropStatus;
    caseId?: Prisma.StringFilter<"Property"> | string;
    case?: Prisma.XOR<Prisma.CaseRecordScalarRelationFilter, Prisma.CaseRecordWhereInput>;
    custodyLogs?: Prisma.CustodyLogListRelationFilter;
    disposal?: Prisma.XOR<Prisma.DisposalNullableScalarRelationFilter, Prisma.DisposalWhereInput> | null;
    scanLogs?: Prisma.ScanLogListRelationFilter;
}, "id" | "qrString">;
export type PropertyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    belongingTo?: Prisma.SortOrder;
    nature?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    qrCodeImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    qrString?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    _count?: Prisma.PropertyCountOrderByAggregateInput;
    _avg?: Prisma.PropertyAvgOrderByAggregateInput;
    _max?: Prisma.PropertyMaxOrderByAggregateInput;
    _min?: Prisma.PropertyMinOrderByAggregateInput;
    _sum?: Prisma.PropertySumOrderByAggregateInput;
};
export type PropertyScalarWhereWithAggregatesInput = {
    AND?: Prisma.PropertyScalarWhereWithAggregatesInput | Prisma.PropertyScalarWhereWithAggregatesInput[];
    OR?: Prisma.PropertyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PropertyScalarWhereWithAggregatesInput | Prisma.PropertyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    category?: Prisma.EnumCategoryWithAggregatesFilter<"Property"> | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeWithAggregatesFilter<"Property"> | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureWithAggregatesFilter<"Property"> | $Enums.SeizureNature;
    quantity?: Prisma.IntWithAggregatesFilter<"Property"> | number;
    location?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"Property"> | string | null;
    qrCodeImage?: Prisma.StringNullableWithAggregatesFilter<"Property"> | string | null;
    qrString?: Prisma.StringWithAggregatesFilter<"Property"> | string;
    status?: Prisma.EnumPropStatusWithAggregatesFilter<"Property"> | $Enums.PropStatus;
    caseId?: Prisma.StringWithAggregatesFilter<"Property"> | string;
};
export type PropertyCreateInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    case: Prisma.CaseRecordCreateNestedOneWithoutPropertiesInput;
    custodyLogs?: Prisma.CustodyLogCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    caseId: string;
    custodyLogs?: Prisma.CustodyLogUncheckedCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalUncheckedCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    case?: Prisma.CaseRecordUpdateOneRequiredWithoutPropertiesNestedInput;
    custodyLogs?: Prisma.CustodyLogUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyLogs?: Prisma.CustodyLogUncheckedUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUncheckedUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyCreateManyInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    caseId: string;
};
export type PropertyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
};
export type PropertyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PropertyListRelationFilter = {
    every?: Prisma.PropertyWhereInput;
    some?: Prisma.PropertyWhereInput;
    none?: Prisma.PropertyWhereInput;
};
export type PropertyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PropertyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    belongingTo?: Prisma.SortOrder;
    nature?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    qrCodeImage?: Prisma.SortOrder;
    qrString?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
};
export type PropertyAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type PropertyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    belongingTo?: Prisma.SortOrder;
    nature?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    qrCodeImage?: Prisma.SortOrder;
    qrString?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
};
export type PropertyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    belongingTo?: Prisma.SortOrder;
    nature?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    qrCodeImage?: Prisma.SortOrder;
    qrString?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
};
export type PropertySumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type PropertyScalarRelationFilter = {
    is?: Prisma.PropertyWhereInput;
    isNot?: Prisma.PropertyWhereInput;
};
export type PropertyCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput> | Prisma.PropertyCreateWithoutCaseInput[] | Prisma.PropertyUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCaseInput | Prisma.PropertyCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.PropertyCreateManyCaseInputEnvelope;
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
};
export type PropertyUncheckedCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput> | Prisma.PropertyCreateWithoutCaseInput[] | Prisma.PropertyUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCaseInput | Prisma.PropertyCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.PropertyCreateManyCaseInputEnvelope;
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
};
export type PropertyUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput> | Prisma.PropertyCreateWithoutCaseInput[] | Prisma.PropertyUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCaseInput | Prisma.PropertyCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.PropertyUpsertWithWhereUniqueWithoutCaseInput | Prisma.PropertyUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.PropertyCreateManyCaseInputEnvelope;
    set?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    disconnect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    delete?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    update?: Prisma.PropertyUpdateWithWhereUniqueWithoutCaseInput | Prisma.PropertyUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.PropertyUpdateManyWithWhereWithoutCaseInput | Prisma.PropertyUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
};
export type PropertyUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput> | Prisma.PropertyCreateWithoutCaseInput[] | Prisma.PropertyUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCaseInput | Prisma.PropertyCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.PropertyUpsertWithWhereUniqueWithoutCaseInput | Prisma.PropertyUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.PropertyCreateManyCaseInputEnvelope;
    set?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    disconnect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    delete?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    connect?: Prisma.PropertyWhereUniqueInput | Prisma.PropertyWhereUniqueInput[];
    update?: Prisma.PropertyUpdateWithWhereUniqueWithoutCaseInput | Prisma.PropertyUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.PropertyUpdateManyWithWhereWithoutCaseInput | Prisma.PropertyUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
};
export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category;
};
export type EnumOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnerType;
};
export type EnumSeizureNatureFieldUpdateOperationsInput = {
    set?: $Enums.SeizureNature;
};
export type EnumPropStatusFieldUpdateOperationsInput = {
    set?: $Enums.PropStatus;
};
export type PropertyCreateNestedOneWithoutCustodyLogsInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCustodyLogsInput, Prisma.PropertyUncheckedCreateWithoutCustodyLogsInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCustodyLogsInput;
    connect?: Prisma.PropertyWhereUniqueInput;
};
export type PropertyUpdateOneRequiredWithoutCustodyLogsNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutCustodyLogsInput, Prisma.PropertyUncheckedCreateWithoutCustodyLogsInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutCustodyLogsInput;
    upsert?: Prisma.PropertyUpsertWithoutCustodyLogsInput;
    connect?: Prisma.PropertyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertyUpdateToOneWithWhereWithoutCustodyLogsInput, Prisma.PropertyUpdateWithoutCustodyLogsInput>, Prisma.PropertyUncheckedUpdateWithoutCustodyLogsInput>;
};
export type PropertyCreateNestedOneWithoutDisposalInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutDisposalInput, Prisma.PropertyUncheckedCreateWithoutDisposalInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutDisposalInput;
    connect?: Prisma.PropertyWhereUniqueInput;
};
export type PropertyUpdateOneRequiredWithoutDisposalNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutDisposalInput, Prisma.PropertyUncheckedCreateWithoutDisposalInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutDisposalInput;
    upsert?: Prisma.PropertyUpsertWithoutDisposalInput;
    connect?: Prisma.PropertyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertyUpdateToOneWithWhereWithoutDisposalInput, Prisma.PropertyUpdateWithoutDisposalInput>, Prisma.PropertyUncheckedUpdateWithoutDisposalInput>;
};
export type PropertyCreateNestedOneWithoutScanLogsInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutScanLogsInput, Prisma.PropertyUncheckedCreateWithoutScanLogsInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutScanLogsInput;
    connect?: Prisma.PropertyWhereUniqueInput;
};
export type PropertyUpdateOneRequiredWithoutScanLogsNestedInput = {
    create?: Prisma.XOR<Prisma.PropertyCreateWithoutScanLogsInput, Prisma.PropertyUncheckedCreateWithoutScanLogsInput>;
    connectOrCreate?: Prisma.PropertyCreateOrConnectWithoutScanLogsInput;
    upsert?: Prisma.PropertyUpsertWithoutScanLogsInput;
    connect?: Prisma.PropertyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertyUpdateToOneWithWhereWithoutScanLogsInput, Prisma.PropertyUpdateWithoutScanLogsInput>, Prisma.PropertyUncheckedUpdateWithoutScanLogsInput>;
};
export type PropertyCreateWithoutCaseInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    custodyLogs?: Prisma.CustodyLogCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateWithoutCaseInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    custodyLogs?: Prisma.CustodyLogUncheckedCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalUncheckedCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyCreateOrConnectWithoutCaseInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput>;
};
export type PropertyCreateManyCaseInputEnvelope = {
    data: Prisma.PropertyCreateManyCaseInput | Prisma.PropertyCreateManyCaseInput[];
    skipDuplicates?: boolean;
};
export type PropertyUpsertWithWhereUniqueWithoutCaseInput = {
    where: Prisma.PropertyWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutCaseInput, Prisma.PropertyUncheckedUpdateWithoutCaseInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutCaseInput, Prisma.PropertyUncheckedCreateWithoutCaseInput>;
};
export type PropertyUpdateWithWhereUniqueWithoutCaseInput = {
    where: Prisma.PropertyWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutCaseInput, Prisma.PropertyUncheckedUpdateWithoutCaseInput>;
};
export type PropertyUpdateManyWithWhereWithoutCaseInput = {
    where: Prisma.PropertyScalarWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyWithoutCaseInput>;
};
export type PropertyScalarWhereInput = {
    AND?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
    OR?: Prisma.PropertyScalarWhereInput[];
    NOT?: Prisma.PropertyScalarWhereInput | Prisma.PropertyScalarWhereInput[];
    id?: Prisma.StringFilter<"Property"> | string;
    category?: Prisma.EnumCategoryFilter<"Property"> | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFilter<"Property"> | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFilter<"Property"> | $Enums.SeizureNature;
    quantity?: Prisma.IntFilter<"Property"> | number;
    location?: Prisma.StringFilter<"Property"> | string;
    description?: Prisma.StringFilter<"Property"> | string;
    photoUrl?: Prisma.StringNullableFilter<"Property"> | string | null;
    qrCodeImage?: Prisma.StringNullableFilter<"Property"> | string | null;
    qrString?: Prisma.StringFilter<"Property"> | string;
    status?: Prisma.EnumPropStatusFilter<"Property"> | $Enums.PropStatus;
    caseId?: Prisma.StringFilter<"Property"> | string;
};
export type PropertyCreateWithoutCustodyLogsInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    case: Prisma.CaseRecordCreateNestedOneWithoutPropertiesInput;
    disposal?: Prisma.DisposalCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateWithoutCustodyLogsInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    caseId: string;
    disposal?: Prisma.DisposalUncheckedCreateNestedOneWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyCreateOrConnectWithoutCustodyLogsInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutCustodyLogsInput, Prisma.PropertyUncheckedCreateWithoutCustodyLogsInput>;
};
export type PropertyUpsertWithoutCustodyLogsInput = {
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutCustodyLogsInput, Prisma.PropertyUncheckedUpdateWithoutCustodyLogsInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutCustodyLogsInput, Prisma.PropertyUncheckedCreateWithoutCustodyLogsInput>;
    where?: Prisma.PropertyWhereInput;
};
export type PropertyUpdateToOneWithWhereWithoutCustodyLogsInput = {
    where?: Prisma.PropertyWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutCustodyLogsInput, Prisma.PropertyUncheckedUpdateWithoutCustodyLogsInput>;
};
export type PropertyUpdateWithoutCustodyLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    case?: Prisma.CaseRecordUpdateOneRequiredWithoutPropertiesNestedInput;
    disposal?: Prisma.DisposalUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateWithoutCustodyLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    disposal?: Prisma.DisposalUncheckedUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyCreateWithoutDisposalInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    case: Prisma.CaseRecordCreateNestedOneWithoutPropertiesInput;
    custodyLogs?: Prisma.CustodyLogCreateNestedManyWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogCreateNestedManyWithoutPropertyInput;
};
export type PropertyUncheckedCreateWithoutDisposalInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    caseId: string;
    custodyLogs?: Prisma.CustodyLogUncheckedCreateNestedManyWithoutPropertyInput;
    scanLogs?: Prisma.ScanLogUncheckedCreateNestedManyWithoutPropertyInput;
};
export type PropertyCreateOrConnectWithoutDisposalInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutDisposalInput, Prisma.PropertyUncheckedCreateWithoutDisposalInput>;
};
export type PropertyUpsertWithoutDisposalInput = {
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutDisposalInput, Prisma.PropertyUncheckedUpdateWithoutDisposalInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutDisposalInput, Prisma.PropertyUncheckedCreateWithoutDisposalInput>;
    where?: Prisma.PropertyWhereInput;
};
export type PropertyUpdateToOneWithWhereWithoutDisposalInput = {
    where?: Prisma.PropertyWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutDisposalInput, Prisma.PropertyUncheckedUpdateWithoutDisposalInput>;
};
export type PropertyUpdateWithoutDisposalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    case?: Prisma.CaseRecordUpdateOneRequiredWithoutPropertiesNestedInput;
    custodyLogs?: Prisma.CustodyLogUpdateManyWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateWithoutDisposalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyLogs?: Prisma.CustodyLogUncheckedUpdateManyWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyCreateWithoutScanLogsInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    case: Prisma.CaseRecordCreateNestedOneWithoutPropertiesInput;
    custodyLogs?: Prisma.CustodyLogCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalCreateNestedOneWithoutPropertyInput;
};
export type PropertyUncheckedCreateWithoutScanLogsInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
    caseId: string;
    custodyLogs?: Prisma.CustodyLogUncheckedCreateNestedManyWithoutPropertyInput;
    disposal?: Prisma.DisposalUncheckedCreateNestedOneWithoutPropertyInput;
};
export type PropertyCreateOrConnectWithoutScanLogsInput = {
    where: Prisma.PropertyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutScanLogsInput, Prisma.PropertyUncheckedCreateWithoutScanLogsInput>;
};
export type PropertyUpsertWithoutScanLogsInput = {
    update: Prisma.XOR<Prisma.PropertyUpdateWithoutScanLogsInput, Prisma.PropertyUncheckedUpdateWithoutScanLogsInput>;
    create: Prisma.XOR<Prisma.PropertyCreateWithoutScanLogsInput, Prisma.PropertyUncheckedCreateWithoutScanLogsInput>;
    where?: Prisma.PropertyWhereInput;
};
export type PropertyUpdateToOneWithWhereWithoutScanLogsInput = {
    where?: Prisma.PropertyWhereInput;
    data: Prisma.XOR<Prisma.PropertyUpdateWithoutScanLogsInput, Prisma.PropertyUncheckedUpdateWithoutScanLogsInput>;
};
export type PropertyUpdateWithoutScanLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    case?: Prisma.CaseRecordUpdateOneRequiredWithoutPropertiesNestedInput;
    custodyLogs?: Prisma.CustodyLogUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUpdateOneWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateWithoutScanLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    custodyLogs?: Prisma.CustodyLogUncheckedUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUncheckedUpdateOneWithoutPropertyNestedInput;
};
export type PropertyCreateManyCaseInput = {
    id?: string;
    category: $Enums.Category;
    belongingTo: $Enums.OwnerType;
    nature: $Enums.SeizureNature;
    quantity: number;
    location: string;
    description: string;
    photoUrl?: string | null;
    qrCodeImage?: string | null;
    qrString: string;
    status?: $Enums.PropStatus;
};
export type PropertyUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    custodyLogs?: Prisma.CustodyLogUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
    custodyLogs?: Prisma.CustodyLogUncheckedUpdateManyWithoutPropertyNestedInput;
    disposal?: Prisma.DisposalUncheckedUpdateOneWithoutPropertyNestedInput;
    scanLogs?: Prisma.ScanLogUncheckedUpdateManyWithoutPropertyNestedInput;
};
export type PropertyUncheckedUpdateManyWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumCategoryFieldUpdateOperationsInput | $Enums.Category;
    belongingTo?: Prisma.EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType;
    nature?: Prisma.EnumSeizureNatureFieldUpdateOperationsInput | $Enums.SeizureNature;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrCodeImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qrString?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPropStatusFieldUpdateOperationsInput | $Enums.PropStatus;
};
/**
 * Count Type PropertyCountOutputType
 */
export type PropertyCountOutputType = {
    custodyLogs: number;
    scanLogs: number;
};
export type PropertyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    custodyLogs?: boolean | PropertyCountOutputTypeCountCustodyLogsArgs;
    scanLogs?: boolean | PropertyCountOutputTypeCountScanLogsArgs;
};
/**
 * PropertyCountOutputType without action
 */
export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: Prisma.PropertyCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PropertyCountOutputType without action
 */
export type PropertyCountOutputTypeCountCustodyLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustodyLogWhereInput;
};
/**
 * PropertyCountOutputType without action
 */
export type PropertyCountOutputTypeCountScanLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScanLogWhereInput;
};
export type PropertySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    belongingTo?: boolean;
    nature?: boolean;
    quantity?: boolean;
    location?: boolean;
    description?: boolean;
    photoUrl?: boolean;
    qrCodeImage?: boolean;
    qrString?: boolean;
    status?: boolean;
    caseId?: boolean;
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
    custodyLogs?: boolean | Prisma.Property$custodyLogsArgs<ExtArgs>;
    disposal?: boolean | Prisma.Property$disposalArgs<ExtArgs>;
    scanLogs?: boolean | Prisma.Property$scanLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    belongingTo?: boolean;
    nature?: boolean;
    quantity?: boolean;
    location?: boolean;
    description?: boolean;
    photoUrl?: boolean;
    qrCodeImage?: boolean;
    qrString?: boolean;
    status?: boolean;
    caseId?: boolean;
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    belongingTo?: boolean;
    nature?: boolean;
    quantity?: boolean;
    location?: boolean;
    description?: boolean;
    photoUrl?: boolean;
    qrCodeImage?: boolean;
    qrString?: boolean;
    status?: boolean;
    caseId?: boolean;
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["property"]>;
export type PropertySelectScalar = {
    id?: boolean;
    category?: boolean;
    belongingTo?: boolean;
    nature?: boolean;
    quantity?: boolean;
    location?: boolean;
    description?: boolean;
    photoUrl?: boolean;
    qrCodeImage?: boolean;
    qrString?: boolean;
    status?: boolean;
    caseId?: boolean;
};
export type PropertyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "category" | "belongingTo" | "nature" | "quantity" | "location" | "description" | "photoUrl" | "qrCodeImage" | "qrString" | "status" | "caseId", ExtArgs["result"]["property"]>;
export type PropertyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
    custodyLogs?: boolean | Prisma.Property$custodyLogsArgs<ExtArgs>;
    disposal?: boolean | Prisma.Property$disposalArgs<ExtArgs>;
    scanLogs?: boolean | Prisma.Property$scanLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PropertyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
};
export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseRecordDefaultArgs<ExtArgs>;
};
export type $PropertyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Property";
    objects: {
        case: Prisma.$CaseRecordPayload<ExtArgs>;
        custodyLogs: Prisma.$CustodyLogPayload<ExtArgs>[];
        disposal: Prisma.$DisposalPayload<ExtArgs> | null;
        scanLogs: Prisma.$ScanLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        category: $Enums.Category;
        belongingTo: $Enums.OwnerType;
        nature: $Enums.SeizureNature;
        quantity: number;
        location: string;
        description: string;
        photoUrl: string | null;
        qrCodeImage: string | null;
        qrString: string;
        status: $Enums.PropStatus;
        caseId: string;
    }, ExtArgs["result"]["property"]>;
    composites: {};
};
export type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PropertyPayload, S>;
export type PropertyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropertyCountAggregateInputType | true;
};
export interface PropertyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Property'];
        meta: {
            name: 'Property';
        };
    };
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: Prisma.SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: Prisma.SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     *
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PropertyFindManyArgs>(args?: Prisma.SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     *
     */
    create<T extends PropertyCreateArgs>(args: Prisma.SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PropertyCreateManyArgs>(args?: Prisma.SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     *
     */
    delete<T extends PropertyDeleteArgs>(args: Prisma.SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PropertyUpdateArgs>(args: Prisma.SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: Prisma.SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: Prisma.SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: Prisma.SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(args?: Prisma.Subset<T, PropertyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropertyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Prisma.Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>;
    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PropertyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PropertyGroupByArgs['orderBy'];
    } : {
        orderBy?: PropertyGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Property model
     */
    readonly fields: PropertyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Property.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    case<T extends Prisma.CaseRecordDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CaseRecordDefaultArgs<ExtArgs>>): Prisma.Prisma__CaseRecordClient<runtime.Types.Result.GetResult<Prisma.$CaseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    custodyLogs<T extends Prisma.Property$custodyLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Property$custodyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    disposal<T extends Prisma.Property$disposalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Property$disposalArgs<ExtArgs>>): Prisma.Prisma__DisposalClient<runtime.Types.Result.GetResult<Prisma.$DisposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    scanLogs<T extends Prisma.Property$scanLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Property$scanLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScanLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Property model
 */
export interface PropertyFieldRefs {
    readonly id: Prisma.FieldRef<"Property", 'String'>;
    readonly category: Prisma.FieldRef<"Property", 'Category'>;
    readonly belongingTo: Prisma.FieldRef<"Property", 'OwnerType'>;
    readonly nature: Prisma.FieldRef<"Property", 'SeizureNature'>;
    readonly quantity: Prisma.FieldRef<"Property", 'Int'>;
    readonly location: Prisma.FieldRef<"Property", 'String'>;
    readonly description: Prisma.FieldRef<"Property", 'String'>;
    readonly photoUrl: Prisma.FieldRef<"Property", 'String'>;
    readonly qrCodeImage: Prisma.FieldRef<"Property", 'String'>;
    readonly qrString: Prisma.FieldRef<"Property", 'String'>;
    readonly status: Prisma.FieldRef<"Property", 'PropStatus'>;
    readonly caseId: Prisma.FieldRef<"Property", 'String'>;
}
/**
 * Property findUnique
 */
export type PropertyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter, which Property to fetch.
     */
    where: Prisma.PropertyWhereUniqueInput;
};
/**
 * Property findUniqueOrThrow
 */
export type PropertyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter, which Property to fetch.
     */
    where: Prisma.PropertyWhereUniqueInput;
};
/**
 * Property findFirst
 */
export type PropertyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter, which Property to fetch.
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Properties to fetch.
     */
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Properties.
     */
    cursor?: Prisma.PropertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Properties.
     */
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
/**
 * Property findFirstOrThrow
 */
export type PropertyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter, which Property to fetch.
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Properties to fetch.
     */
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Properties.
     */
    cursor?: Prisma.PropertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Properties.
     */
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
/**
 * Property findMany
 */
export type PropertyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter, which Properties to fetch.
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Properties to fetch.
     */
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Properties.
     */
    cursor?: Prisma.PropertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Properties.
     */
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
/**
 * Property create
 */
export type PropertyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Property.
     */
    data: Prisma.XOR<Prisma.PropertyCreateInput, Prisma.PropertyUncheckedCreateInput>;
};
/**
 * Property createMany
 */
export type PropertyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: Prisma.PropertyCreateManyInput | Prisma.PropertyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Property createManyAndReturn
 */
export type PropertyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * The data used to create many Properties.
     */
    data: Prisma.PropertyCreateManyInput | Prisma.PropertyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Property update
 */
export type PropertyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Property.
     */
    data: Prisma.XOR<Prisma.PropertyUpdateInput, Prisma.PropertyUncheckedUpdateInput>;
    /**
     * Choose, which Property to update.
     */
    where: Prisma.PropertyWhereUniqueInput;
};
/**
 * Property updateMany
 */
export type PropertyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyInput>;
    /**
     * Filter which Properties to update
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * Limit how many Properties to update.
     */
    limit?: number;
};
/**
 * Property updateManyAndReturn
 */
export type PropertyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * The data used to update Properties.
     */
    data: Prisma.XOR<Prisma.PropertyUpdateManyMutationInput, Prisma.PropertyUncheckedUpdateManyInput>;
    /**
     * Filter which Properties to update
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * Limit how many Properties to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Property upsert
 */
export type PropertyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: Prisma.PropertyWhereUniqueInput;
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: Prisma.XOR<Prisma.PropertyCreateInput, Prisma.PropertyUncheckedCreateInput>;
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PropertyUpdateInput, Prisma.PropertyUncheckedUpdateInput>;
};
/**
 * Property delete
 */
export type PropertyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    /**
     * Filter which Property to delete.
     */
    where: Prisma.PropertyWhereUniqueInput;
};
/**
 * Property deleteMany
 */
export type PropertyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: Prisma.PropertyWhereInput;
    /**
     * Limit how many Properties to delete.
     */
    limit?: number;
};
/**
 * Property.custodyLogs
 */
export type Property$custodyLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyLog
     */
    select?: Prisma.CustodyLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CustodyLog
     */
    omit?: Prisma.CustodyLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustodyLogInclude<ExtArgs> | null;
    where?: Prisma.CustodyLogWhereInput;
    orderBy?: Prisma.CustodyLogOrderByWithRelationInput | Prisma.CustodyLogOrderByWithRelationInput[];
    cursor?: Prisma.CustodyLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustodyLogScalarFieldEnum | Prisma.CustodyLogScalarFieldEnum[];
};
/**
 * Property.disposal
 */
export type Property$disposalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disposal
     */
    select?: Prisma.DisposalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Disposal
     */
    omit?: Prisma.DisposalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisposalInclude<ExtArgs> | null;
    where?: Prisma.DisposalWhereInput;
};
/**
 * Property.scanLogs
 */
export type Property$scanLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanLog
     */
    select?: Prisma.ScanLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScanLog
     */
    omit?: Prisma.ScanLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScanLogInclude<ExtArgs> | null;
    where?: Prisma.ScanLogWhereInput;
    orderBy?: Prisma.ScanLogOrderByWithRelationInput | Prisma.ScanLogOrderByWithRelationInput[];
    cursor?: Prisma.ScanLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScanLogScalarFieldEnum | Prisma.ScanLogScalarFieldEnum[];
};
/**
 * Property without action
 */
export type PropertyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Property.d.ts.map