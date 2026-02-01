import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CustodyLog
 *
 */
export type CustodyLogModel = runtime.Types.Result.DefaultSelection<Prisma.$CustodyLogPayload>;
export type AggregateCustodyLog = {
    _count: CustodyLogCountAggregateOutputType | null;
    _min: CustodyLogMinAggregateOutputType | null;
    _max: CustodyLogMaxAggregateOutputType | null;
};
export type CustodyLogMinAggregateOutputType = {
    id: string | null;
    fromOfficer: string | null;
    toOfficer: string | null;
    purpose: string | null;
    remarks: string | null;
    movedAt: Date | null;
    propertyId: string | null;
};
export type CustodyLogMaxAggregateOutputType = {
    id: string | null;
    fromOfficer: string | null;
    toOfficer: string | null;
    purpose: string | null;
    remarks: string | null;
    movedAt: Date | null;
    propertyId: string | null;
};
export type CustodyLogCountAggregateOutputType = {
    id: number;
    fromOfficer: number;
    toOfficer: number;
    purpose: number;
    remarks: number;
    movedAt: number;
    propertyId: number;
    _all: number;
};
export type CustodyLogMinAggregateInputType = {
    id?: true;
    fromOfficer?: true;
    toOfficer?: true;
    purpose?: true;
    remarks?: true;
    movedAt?: true;
    propertyId?: true;
};
export type CustodyLogMaxAggregateInputType = {
    id?: true;
    fromOfficer?: true;
    toOfficer?: true;
    purpose?: true;
    remarks?: true;
    movedAt?: true;
    propertyId?: true;
};
export type CustodyLogCountAggregateInputType = {
    id?: true;
    fromOfficer?: true;
    toOfficer?: true;
    purpose?: true;
    remarks?: true;
    movedAt?: true;
    propertyId?: true;
    _all?: true;
};
export type CustodyLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyLog to aggregate.
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CustodyLogs to fetch.
     */
    orderBy?: Prisma.CustodyLogOrderByWithRelationInput | Prisma.CustodyLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CustodyLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CustodyLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CustodyLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CustodyLogs
    **/
    _count?: true | CustodyLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CustodyLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CustodyLogMaxAggregateInputType;
};
export type GetCustodyLogAggregateType<T extends CustodyLogAggregateArgs> = {
    [P in keyof T & keyof AggregateCustodyLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustodyLog[P]> : Prisma.GetScalarType<T[P], AggregateCustodyLog[P]>;
};
export type CustodyLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustodyLogWhereInput;
    orderBy?: Prisma.CustodyLogOrderByWithAggregationInput | Prisma.CustodyLogOrderByWithAggregationInput[];
    by: Prisma.CustodyLogScalarFieldEnum[] | Prisma.CustodyLogScalarFieldEnum;
    having?: Prisma.CustodyLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustodyLogCountAggregateInputType | true;
    _min?: CustodyLogMinAggregateInputType;
    _max?: CustodyLogMaxAggregateInputType;
};
export type CustodyLogGroupByOutputType = {
    id: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks: string | null;
    movedAt: Date;
    propertyId: string;
    _count: CustodyLogCountAggregateOutputType | null;
    _min: CustodyLogMinAggregateOutputType | null;
    _max: CustodyLogMaxAggregateOutputType | null;
};
type GetCustodyLogGroupByPayload<T extends CustodyLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustodyLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustodyLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustodyLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustodyLogGroupByOutputType[P]>;
}>>;
export type CustodyLogWhereInput = {
    AND?: Prisma.CustodyLogWhereInput | Prisma.CustodyLogWhereInput[];
    OR?: Prisma.CustodyLogWhereInput[];
    NOT?: Prisma.CustodyLogWhereInput | Prisma.CustodyLogWhereInput[];
    id?: Prisma.StringFilter<"CustodyLog"> | string;
    fromOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    toOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    purpose?: Prisma.StringFilter<"CustodyLog"> | string;
    remarks?: Prisma.StringNullableFilter<"CustodyLog"> | string | null;
    movedAt?: Prisma.DateTimeFilter<"CustodyLog"> | Date | string;
    propertyId?: Prisma.StringFilter<"CustodyLog"> | string;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
};
export type CustodyLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fromOfficer?: Prisma.SortOrder;
    toOfficer?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    movedAt?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    property?: Prisma.PropertyOrderByWithRelationInput;
};
export type CustodyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CustodyLogWhereInput | Prisma.CustodyLogWhereInput[];
    OR?: Prisma.CustodyLogWhereInput[];
    NOT?: Prisma.CustodyLogWhereInput | Prisma.CustodyLogWhereInput[];
    fromOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    toOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    purpose?: Prisma.StringFilter<"CustodyLog"> | string;
    remarks?: Prisma.StringNullableFilter<"CustodyLog"> | string | null;
    movedAt?: Prisma.DateTimeFilter<"CustodyLog"> | Date | string;
    propertyId?: Prisma.StringFilter<"CustodyLog"> | string;
    property?: Prisma.XOR<Prisma.PropertyScalarRelationFilter, Prisma.PropertyWhereInput>;
}, "id">;
export type CustodyLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fromOfficer?: Prisma.SortOrder;
    toOfficer?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    movedAt?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    _count?: Prisma.CustodyLogCountOrderByAggregateInput;
    _max?: Prisma.CustodyLogMaxOrderByAggregateInput;
    _min?: Prisma.CustodyLogMinOrderByAggregateInput;
};
export type CustodyLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustodyLogScalarWhereWithAggregatesInput | Prisma.CustodyLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustodyLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustodyLogScalarWhereWithAggregatesInput | Prisma.CustodyLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustodyLog"> | string;
    fromOfficer?: Prisma.StringWithAggregatesFilter<"CustodyLog"> | string;
    toOfficer?: Prisma.StringWithAggregatesFilter<"CustodyLog"> | string;
    purpose?: Prisma.StringWithAggregatesFilter<"CustodyLog"> | string;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"CustodyLog"> | string | null;
    movedAt?: Prisma.DateTimeWithAggregatesFilter<"CustodyLog"> | Date | string;
    propertyId?: Prisma.StringWithAggregatesFilter<"CustodyLog"> | string;
};
export type CustodyLogCreateInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
    property: Prisma.PropertyCreateNestedOneWithoutCustodyLogsInput;
};
export type CustodyLogUncheckedCreateInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
    propertyId: string;
};
export type CustodyLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    property?: Prisma.PropertyUpdateOneRequiredWithoutCustodyLogsNestedInput;
};
export type CustodyLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustodyLogCreateManyInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
    propertyId: string;
};
export type CustodyLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustodyLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustodyLogListRelationFilter = {
    every?: Prisma.CustodyLogWhereInput;
    some?: Prisma.CustodyLogWhereInput;
    none?: Prisma.CustodyLogWhereInput;
};
export type CustodyLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustodyLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromOfficer?: Prisma.SortOrder;
    toOfficer?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    movedAt?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type CustodyLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromOfficer?: Prisma.SortOrder;
    toOfficer?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    movedAt?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type CustodyLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromOfficer?: Prisma.SortOrder;
    toOfficer?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    movedAt?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
};
export type CustodyLogCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput> | Prisma.CustodyLogCreateWithoutPropertyInput[] | Prisma.CustodyLogUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.CustodyLogCreateOrConnectWithoutPropertyInput | Prisma.CustodyLogCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.CustodyLogCreateManyPropertyInputEnvelope;
    connect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
};
export type CustodyLogUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput> | Prisma.CustodyLogCreateWithoutPropertyInput[] | Prisma.CustodyLogUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.CustodyLogCreateOrConnectWithoutPropertyInput | Prisma.CustodyLogCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.CustodyLogCreateManyPropertyInputEnvelope;
    connect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
};
export type CustodyLogUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput> | Prisma.CustodyLogCreateWithoutPropertyInput[] | Prisma.CustodyLogUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.CustodyLogCreateOrConnectWithoutPropertyInput | Prisma.CustodyLogCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.CustodyLogUpsertWithWhereUniqueWithoutPropertyInput | Prisma.CustodyLogUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.CustodyLogCreateManyPropertyInputEnvelope;
    set?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    disconnect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    delete?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    connect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    update?: Prisma.CustodyLogUpdateWithWhereUniqueWithoutPropertyInput | Prisma.CustodyLogUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.CustodyLogUpdateManyWithWhereWithoutPropertyInput | Prisma.CustodyLogUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.CustodyLogScalarWhereInput | Prisma.CustodyLogScalarWhereInput[];
};
export type CustodyLogUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput> | Prisma.CustodyLogCreateWithoutPropertyInput[] | Prisma.CustodyLogUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.CustodyLogCreateOrConnectWithoutPropertyInput | Prisma.CustodyLogCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.CustodyLogUpsertWithWhereUniqueWithoutPropertyInput | Prisma.CustodyLogUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.CustodyLogCreateManyPropertyInputEnvelope;
    set?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    disconnect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    delete?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    connect?: Prisma.CustodyLogWhereUniqueInput | Prisma.CustodyLogWhereUniqueInput[];
    update?: Prisma.CustodyLogUpdateWithWhereUniqueWithoutPropertyInput | Prisma.CustodyLogUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.CustodyLogUpdateManyWithWhereWithoutPropertyInput | Prisma.CustodyLogUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.CustodyLogScalarWhereInput | Prisma.CustodyLogScalarWhereInput[];
};
export type CustodyLogCreateWithoutPropertyInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
};
export type CustodyLogUncheckedCreateWithoutPropertyInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
};
export type CustodyLogCreateOrConnectWithoutPropertyInput = {
    where: Prisma.CustodyLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput>;
};
export type CustodyLogCreateManyPropertyInputEnvelope = {
    data: Prisma.CustodyLogCreateManyPropertyInput | Prisma.CustodyLogCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type CustodyLogUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.CustodyLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustodyLogUpdateWithoutPropertyInput, Prisma.CustodyLogUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.CustodyLogCreateWithoutPropertyInput, Prisma.CustodyLogUncheckedCreateWithoutPropertyInput>;
};
export type CustodyLogUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.CustodyLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustodyLogUpdateWithoutPropertyInput, Prisma.CustodyLogUncheckedUpdateWithoutPropertyInput>;
};
export type CustodyLogUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.CustodyLogScalarWhereInput;
    data: Prisma.XOR<Prisma.CustodyLogUpdateManyMutationInput, Prisma.CustodyLogUncheckedUpdateManyWithoutPropertyInput>;
};
export type CustodyLogScalarWhereInput = {
    AND?: Prisma.CustodyLogScalarWhereInput | Prisma.CustodyLogScalarWhereInput[];
    OR?: Prisma.CustodyLogScalarWhereInput[];
    NOT?: Prisma.CustodyLogScalarWhereInput | Prisma.CustodyLogScalarWhereInput[];
    id?: Prisma.StringFilter<"CustodyLog"> | string;
    fromOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    toOfficer?: Prisma.StringFilter<"CustodyLog"> | string;
    purpose?: Prisma.StringFilter<"CustodyLog"> | string;
    remarks?: Prisma.StringNullableFilter<"CustodyLog"> | string | null;
    movedAt?: Prisma.DateTimeFilter<"CustodyLog"> | Date | string;
    propertyId?: Prisma.StringFilter<"CustodyLog"> | string;
};
export type CustodyLogCreateManyPropertyInput = {
    id?: string;
    fromOfficer: string;
    toOfficer: string;
    purpose: string;
    remarks?: string | null;
    movedAt?: Date | string;
};
export type CustodyLogUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustodyLogUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustodyLogUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    toOfficer?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.StringFieldUpdateOperationsInput | string;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustodyLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromOfficer?: boolean;
    toOfficer?: boolean;
    purpose?: boolean;
    remarks?: boolean;
    movedAt?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["custodyLog"]>;
export type CustodyLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromOfficer?: boolean;
    toOfficer?: boolean;
    purpose?: boolean;
    remarks?: boolean;
    movedAt?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["custodyLog"]>;
export type CustodyLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromOfficer?: boolean;
    toOfficer?: boolean;
    purpose?: boolean;
    remarks?: boolean;
    movedAt?: boolean;
    propertyId?: boolean;
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["custodyLog"]>;
export type CustodyLogSelectScalar = {
    id?: boolean;
    fromOfficer?: boolean;
    toOfficer?: boolean;
    purpose?: boolean;
    remarks?: boolean;
    movedAt?: boolean;
    propertyId?: boolean;
};
export type CustodyLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fromOfficer" | "toOfficer" | "purpose" | "remarks" | "movedAt" | "propertyId", ExtArgs["result"]["custodyLog"]>;
export type CustodyLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type CustodyLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type CustodyLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    property?: boolean | Prisma.PropertyDefaultArgs<ExtArgs>;
};
export type $CustodyLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustodyLog";
    objects: {
        property: Prisma.$PropertyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fromOfficer: string;
        toOfficer: string;
        purpose: string;
        remarks: string | null;
        movedAt: Date;
        propertyId: string;
    }, ExtArgs["result"]["custodyLog"]>;
    composites: {};
};
export type CustodyLogGetPayload<S extends boolean | null | undefined | CustodyLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload, S>;
export type CustodyLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustodyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustodyLogCountAggregateInputType | true;
};
export interface CustodyLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustodyLog'];
        meta: {
            name: 'CustodyLog';
        };
    };
    /**
     * Find zero or one CustodyLog that matches the filter.
     * @param {CustodyLogFindUniqueArgs} args - Arguments to find a CustodyLog
     * @example
     * // Get one CustodyLog
     * const custodyLog = await prisma.custodyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustodyLogFindUniqueArgs>(args: Prisma.SelectSubset<T, CustodyLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CustodyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustodyLogFindUniqueOrThrowArgs} args - Arguments to find a CustodyLog
     * @example
     * // Get one CustodyLog
     * const custodyLog = await prisma.custodyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustodyLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustodyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CustodyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogFindFirstArgs} args - Arguments to find a CustodyLog
     * @example
     * // Get one CustodyLog
     * const custodyLog = await prisma.custodyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustodyLogFindFirstArgs>(args?: Prisma.SelectSubset<T, CustodyLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CustodyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogFindFirstOrThrowArgs} args - Arguments to find a CustodyLog
     * @example
     * // Get one CustodyLog
     * const custodyLog = await prisma.custodyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustodyLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustodyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CustodyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustodyLogs
     * const custodyLogs = await prisma.custodyLog.findMany()
     *
     * // Get first 10 CustodyLogs
     * const custodyLogs = await prisma.custodyLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const custodyLogWithIdOnly = await prisma.custodyLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CustodyLogFindManyArgs>(args?: Prisma.SelectSubset<T, CustodyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CustodyLog.
     * @param {CustodyLogCreateArgs} args - Arguments to create a CustodyLog.
     * @example
     * // Create one CustodyLog
     * const CustodyLog = await prisma.custodyLog.create({
     *   data: {
     *     // ... data to create a CustodyLog
     *   }
     * })
     *
     */
    create<T extends CustodyLogCreateArgs>(args: Prisma.SelectSubset<T, CustodyLogCreateArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CustodyLogs.
     * @param {CustodyLogCreateManyArgs} args - Arguments to create many CustodyLogs.
     * @example
     * // Create many CustodyLogs
     * const custodyLog = await prisma.custodyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CustodyLogCreateManyArgs>(args?: Prisma.SelectSubset<T, CustodyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CustodyLogs and returns the data saved in the database.
     * @param {CustodyLogCreateManyAndReturnArgs} args - Arguments to create many CustodyLogs.
     * @example
     * // Create many CustodyLogs
     * const custodyLog = await prisma.custodyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CustodyLogs and only return the `id`
     * const custodyLogWithIdOnly = await prisma.custodyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CustodyLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustodyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CustodyLog.
     * @param {CustodyLogDeleteArgs} args - Arguments to delete one CustodyLog.
     * @example
     * // Delete one CustodyLog
     * const CustodyLog = await prisma.custodyLog.delete({
     *   where: {
     *     // ... filter to delete one CustodyLog
     *   }
     * })
     *
     */
    delete<T extends CustodyLogDeleteArgs>(args: Prisma.SelectSubset<T, CustodyLogDeleteArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CustodyLog.
     * @param {CustodyLogUpdateArgs} args - Arguments to update one CustodyLog.
     * @example
     * // Update one CustodyLog
     * const custodyLog = await prisma.custodyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CustodyLogUpdateArgs>(args: Prisma.SelectSubset<T, CustodyLogUpdateArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CustodyLogs.
     * @param {CustodyLogDeleteManyArgs} args - Arguments to filter CustodyLogs to delete.
     * @example
     * // Delete a few CustodyLogs
     * const { count } = await prisma.custodyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CustodyLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustodyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CustodyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustodyLogs
     * const custodyLog = await prisma.custodyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CustodyLogUpdateManyArgs>(args: Prisma.SelectSubset<T, CustodyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CustodyLogs and returns the data updated in the database.
     * @param {CustodyLogUpdateManyAndReturnArgs} args - Arguments to update many CustodyLogs.
     * @example
     * // Update many CustodyLogs
     * const custodyLog = await prisma.custodyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CustodyLogs and only return the `id`
     * const custodyLogWithIdOnly = await prisma.custodyLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustodyLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustodyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CustodyLog.
     * @param {CustodyLogUpsertArgs} args - Arguments to update or create a CustodyLog.
     * @example
     * // Update or create a CustodyLog
     * const custodyLog = await prisma.custodyLog.upsert({
     *   create: {
     *     // ... data to create a CustodyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustodyLog we want to update
     *   }
     * })
     */
    upsert<T extends CustodyLogUpsertArgs>(args: Prisma.SelectSubset<T, CustodyLogUpsertArgs<ExtArgs>>): Prisma.Prisma__CustodyLogClient<runtime.Types.Result.GetResult<Prisma.$CustodyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CustodyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogCountArgs} args - Arguments to filter CustodyLogs to count.
     * @example
     * // Count the number of CustodyLogs
     * const count = await prisma.custodyLog.count({
     *   where: {
     *     // ... the filter for the CustodyLogs we want to count
     *   }
     * })
    **/
    count<T extends CustodyLogCountArgs>(args?: Prisma.Subset<T, CustodyLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustodyLogCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CustodyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustodyLogAggregateArgs>(args: Prisma.Subset<T, CustodyLogAggregateArgs>): Prisma.PrismaPromise<GetCustodyLogAggregateType<T>>;
    /**
     * Group by CustodyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyLogGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CustodyLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustodyLogGroupByArgs['orderBy'];
    } : {
        orderBy?: CustodyLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustodyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustodyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CustodyLog model
     */
    readonly fields: CustodyLogFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CustodyLog.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CustodyLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    property<T extends Prisma.PropertyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertyDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertyClient<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CustodyLog model
 */
export interface CustodyLogFieldRefs {
    readonly id: Prisma.FieldRef<"CustodyLog", 'String'>;
    readonly fromOfficer: Prisma.FieldRef<"CustodyLog", 'String'>;
    readonly toOfficer: Prisma.FieldRef<"CustodyLog", 'String'>;
    readonly purpose: Prisma.FieldRef<"CustodyLog", 'String'>;
    readonly remarks: Prisma.FieldRef<"CustodyLog", 'String'>;
    readonly movedAt: Prisma.FieldRef<"CustodyLog", 'DateTime'>;
    readonly propertyId: Prisma.FieldRef<"CustodyLog", 'String'>;
}
/**
 * CustodyLog findUnique
 */
export type CustodyLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CustodyLog to fetch.
     */
    where: Prisma.CustodyLogWhereUniqueInput;
};
/**
 * CustodyLog findUniqueOrThrow
 */
export type CustodyLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CustodyLog to fetch.
     */
    where: Prisma.CustodyLogWhereUniqueInput;
};
/**
 * CustodyLog findFirst
 */
export type CustodyLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CustodyLog to fetch.
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CustodyLogs to fetch.
     */
    orderBy?: Prisma.CustodyLogOrderByWithRelationInput | Prisma.CustodyLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CustodyLogs.
     */
    cursor?: Prisma.CustodyLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CustodyLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CustodyLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CustodyLogs.
     */
    distinct?: Prisma.CustodyLogScalarFieldEnum | Prisma.CustodyLogScalarFieldEnum[];
};
/**
 * CustodyLog findFirstOrThrow
 */
export type CustodyLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CustodyLog to fetch.
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CustodyLogs to fetch.
     */
    orderBy?: Prisma.CustodyLogOrderByWithRelationInput | Prisma.CustodyLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CustodyLogs.
     */
    cursor?: Prisma.CustodyLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CustodyLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CustodyLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CustodyLogs.
     */
    distinct?: Prisma.CustodyLogScalarFieldEnum | Prisma.CustodyLogScalarFieldEnum[];
};
/**
 * CustodyLog findMany
 */
export type CustodyLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CustodyLogs to fetch.
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CustodyLogs to fetch.
     */
    orderBy?: Prisma.CustodyLogOrderByWithRelationInput | Prisma.CustodyLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CustodyLogs.
     */
    cursor?: Prisma.CustodyLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CustodyLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CustodyLogs.
     */
    skip?: number;
    distinct?: Prisma.CustodyLogScalarFieldEnum | Prisma.CustodyLogScalarFieldEnum[];
};
/**
 * CustodyLog create
 */
export type CustodyLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CustodyLog.
     */
    data: Prisma.XOR<Prisma.CustodyLogCreateInput, Prisma.CustodyLogUncheckedCreateInput>;
};
/**
 * CustodyLog createMany
 */
export type CustodyLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustodyLogs.
     */
    data: Prisma.CustodyLogCreateManyInput | Prisma.CustodyLogCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CustodyLog createManyAndReturn
 */
export type CustodyLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyLog
     */
    select?: Prisma.CustodyLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CustodyLog
     */
    omit?: Prisma.CustodyLogOmit<ExtArgs> | null;
    /**
     * The data used to create many CustodyLogs.
     */
    data: Prisma.CustodyLogCreateManyInput | Prisma.CustodyLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustodyLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CustodyLog update
 */
export type CustodyLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CustodyLog.
     */
    data: Prisma.XOR<Prisma.CustodyLogUpdateInput, Prisma.CustodyLogUncheckedUpdateInput>;
    /**
     * Choose, which CustodyLog to update.
     */
    where: Prisma.CustodyLogWhereUniqueInput;
};
/**
 * CustodyLog updateMany
 */
export type CustodyLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CustodyLogs.
     */
    data: Prisma.XOR<Prisma.CustodyLogUpdateManyMutationInput, Prisma.CustodyLogUncheckedUpdateManyInput>;
    /**
     * Filter which CustodyLogs to update
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * Limit how many CustodyLogs to update.
     */
    limit?: number;
};
/**
 * CustodyLog updateManyAndReturn
 */
export type CustodyLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyLog
     */
    select?: Prisma.CustodyLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CustodyLog
     */
    omit?: Prisma.CustodyLogOmit<ExtArgs> | null;
    /**
     * The data used to update CustodyLogs.
     */
    data: Prisma.XOR<Prisma.CustodyLogUpdateManyMutationInput, Prisma.CustodyLogUncheckedUpdateManyInput>;
    /**
     * Filter which CustodyLogs to update
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * Limit how many CustodyLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustodyLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CustodyLog upsert
 */
export type CustodyLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CustodyLog to update in case it exists.
     */
    where: Prisma.CustodyLogWhereUniqueInput;
    /**
     * In case the CustodyLog found by the `where` argument doesn't exist, create a new CustodyLog with this data.
     */
    create: Prisma.XOR<Prisma.CustodyLogCreateInput, Prisma.CustodyLogUncheckedCreateInput>;
    /**
     * In case the CustodyLog was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CustodyLogUpdateInput, Prisma.CustodyLogUncheckedUpdateInput>;
};
/**
 * CustodyLog delete
 */
export type CustodyLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CustodyLog to delete.
     */
    where: Prisma.CustodyLogWhereUniqueInput;
};
/**
 * CustodyLog deleteMany
 */
export type CustodyLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyLogs to delete
     */
    where?: Prisma.CustodyLogWhereInput;
    /**
     * Limit how many CustodyLogs to delete.
     */
    limit?: number;
};
/**
 * CustodyLog without action
 */
export type CustodyLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=CustodyLog.d.ts.map